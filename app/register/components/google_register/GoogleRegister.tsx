'use client';

import {CredentialResponse, GoogleLogin} from '@react-oauth/google';

export default function GoogleRegister() {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse: CredentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
      text='signup_with'
    />
  );
}
