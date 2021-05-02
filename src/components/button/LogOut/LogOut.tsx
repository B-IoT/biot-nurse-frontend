import './LogOut.css';
import { useHistory } from 'react-router-dom';
import RoundButton from '../RoundButton/RoundButton';
import React from 'react';
import { loginPath } from '../../../App';

export default function LogOut() {
  const history = useHistory();

  function handleLogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenDate');
    history.push(loginPath);
  }

  return (
    <div className="log-out">
      <RoundButton
        iconPath={'navbarIcons/logOut.svg'}
        onClickHandler={handleLogOut}
      />
    </div>
  );
}
