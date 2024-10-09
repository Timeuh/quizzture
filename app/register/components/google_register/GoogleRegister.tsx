'use client';

import {CredentialResponse, GoogleLogin} from '@react-oauth/google';
import {useState, useCallback} from 'react';
import {cGoogleRegister_error, cGoogleRegister_register} from './GoogleRegister.styles';
import readJwt from '@utils/functions/jwt/readJwt';
import {GoogleAuth} from '@utils/types/api';
import createUser from '@actions/user/createUser';
import {useRouter} from 'next/navigation';
import createJwt from '@utils/functions/jwt/createJwt';
import setUserCookie from '@actions/cookies/setUserCookie';

/**
 * Register the user with google auth
 */
export default function GoogleRegister() {
  const [error, setError] = useState<string>('');

  const router = useRouter();

  /**
   * Success register
   *
   * @param {CredentialResponse} credentialResponse : the response from google auth
   */
  const handleSuccess = useCallback(
    async (credentialResponse: CredentialResponse) => {
      // decode google auth jwt
      const decoded: GoogleAuth = (await readJwt(credentialResponse.credential || '')) as GoogleAuth;
      // create the user
      const creation = await createUser(decoded.picture, decoded.name, decoded.email, '', 'google');

      // if the creation failed
      if ('error' in creation) {
        // if the email is already used
        if (creation.error.message === 'Duplicate error') {
          setError('Ce compte est déjà utilisé');
          return;
        }

        // otherwise
        setError('Une erreur est survenue, veuillez réessayer');
        return;
      }

      // create user jwt and set it in cookies
      const userJwt = await createJwt(creation);
      setUserCookie(userJwt);

      // redirect to the home page
      router.push('/');
    },
    [router],
  );

  /**
   * Register error
   */
  const handleError = useCallback(() => {
    setError('Connexion à Google échouée, veuillez rééssayer');
  }, []);

  return (
    <section id='google_login' className={cGoogleRegister_register}>
      <h3 className={cGoogleRegister_error}>{error}</h3>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} text='signup_with' />
    </section>
  );
}
