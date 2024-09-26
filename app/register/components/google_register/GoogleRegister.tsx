'use client';

import {CredentialResponse, GoogleLogin} from '@react-oauth/google';
import {useState} from 'react';
import {cGoogleRegister_error, cGoogleRegister_register} from './GoogleRegister.styles';

export default function GoogleRegister() {
  const [error, setError] = useState<string>('');

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);
  };

  const handleError = () => {
    setError('Connexion à Google échouée, veuillez rééssayer');
  };

  return (
    <section id='google_login' className={cGoogleRegister_register}>
      <h3 className={cGoogleRegister_error}>{error}</h3>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} text='signup_with' />
    </section>
  );
}
