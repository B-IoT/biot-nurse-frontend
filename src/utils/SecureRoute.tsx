import { Redirect, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchToken, TOKEN_LIFETIME } from '../api/api';
import { LOGIN_PATH } from '../App';

/**
 * Route that requires the user to be logged in to be accessed.
 */
export default function SecureRoute({ component: Component, ...rest }: any) {
  const token = localStorage.getItem('token');
  const tokenDate = localStorage.getItem('tokenDate');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Check if token exists and if it is younger than 6 days (in milliseconds)
  useEffect(() => {
    if (
      token === null ||
      tokenDate === null ||
      Date.now() - parseInt(tokenDate) > TOKEN_LIFETIME
    ) {
      setIsLoggedIn(false);
    } else {
      fetchToken();
      setIsLoggedIn(true);
    }
  }, [token, tokenDate]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: LOGIN_PATH, state: { from: props.location } }}
          />
        )
      }
    />
  );
}