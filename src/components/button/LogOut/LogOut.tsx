import './LogOut.css';
import { useHistory } from 'react-router-dom';
import RoundButton from '../RoundButton/RoundButton';
import React from 'react';
import { LOGIN_PATH } from '../../../App';

/**
 * Button that logs out the user.
 */
export default function LogOut() {
  const history = useHistory();

  function handleLogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenDate');
    history.push(LOGIN_PATH);
  }

  return (
    <div className="log-out">
      <RoundButton iconPath={'navbarIcons/logOut.svg'} onClick={handleLogOut} />
    </div>
  );
}
