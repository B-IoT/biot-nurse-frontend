import React, { useState } from 'react';

import './LoginPage.css';
import Input from '../../components/input/Input/Input';
import logo from '../../img/logoColor.png';
import Button from '../../components/button/Button/Button';
import { authenticate } from '../../api/api';
import { useHistory } from 'react-router-dom';
import { SEARCH_PATH } from '../../App';
import { Scale } from '../../utils/animations';

/**
 * The login page.
 */
export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  async function handleSignIn() {
    const success = await authenticate(username, password);

    if (success) {
      history.push(SEARCH_PATH);
    } else {
      setShowError(true);
    }
  }

  return (
    <div className="center-login">
      <a href="https://www.b-iot.ch">
        <img className="login-logo" src={logo} alt="BioT logo" />
      </a>
      <Input
        setKeyword={setUsername}
        defaultText="Nom d'utilisateur"
        width={350}
        style={{}}
        isPassword={false}
        enterHandler={() => null}
      />
      <Input
        setKeyword={setPassword}
        defaultText="Mot de passe"
        width={350}
        style={{ marginTop: 15 }}
        isPassword={true}
        enterHandler={handleSignIn}
      />
      {showError && (
        <div className="error-text login-error" data-testid="error-text">
          {'Identifiant ou mot de passe incorrect.'}
        </div>
      )}

      <Button
        onClick={handleSignIn}
        width={180}
        height={75}
        borderRadius={37}
        style={{ marginTop: 35 }}
      >
        <Scale
          className="button-text axiforma-medium-blue-22px"
          style={{ width: 180 }}
        >
          {'Connexion'}
        </Scale>
      </Button>
    </div>
  );
}
