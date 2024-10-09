'use client';

import {CredentialResponse, GoogleLogin} from '@react-oauth/google';
import {useState, useCallback} from 'react';
import {cGoogleLogin_error, cGoogleLogin_login} from './GoogleUserLogin.styles';
import readJwt from '@utils/functions/jwt/readJwt';
import {GoogleAuth} from '@utils/types/api';
import {useRouter} from 'next/navigation';
import createJwt from '@utils/functions/jwt/createJwt';
import setUserCookie from '@actions/cookies/setUserCookie';
import logUser from '@actions/user/logUser';

/**
 * Log the user with google auth
 */
export default function GoogleUserLogin() {
  const [error, setError] = useState<string>('');

  const router = useRouter();

  /**
   * Success login
   *
   * @param {CredentialResponse} credentialResponse : the response from google auth
   */
  const handleSuccess = useCallback(
    async (credentialResponse: CredentialResponse) => {
      // decode google auth jwt
      const decoded: GoogleAuth = (await readJwt(credentialResponse.credential || '')) as GoogleAuth;
      // create the user
      const login = await logUser(decoded.email, '', 'google');

      // if the login failed
      if ('error' in login) {
        // if the email is already used
        if (login.error.code === 404) {
          setError('Aucun compte associé à cet email');
          return;
        }

        // otherwise
        setError('Une erreur est survenue, veuillez réessayer');
        return;
      }

      // create user jwt and set it in cookies
      const userJwt = await createJwt(login);
      setUserCookie(userJwt);

      // redirect to the home page
      router.push('/');
    },
    [router],
  );

  /**
   * Error login
   */
  const handleError = useCallback(() => {
    setError('Connexion à Google échouée, veuillez rééssayer');
  }, []);

  return (
    <section id='google_login' className={cGoogleLogin_login}>
      <h3 className={cGoogleLogin_error}>{error}</h3>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </section>
  );
}
