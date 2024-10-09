'use client';

import {FormEvent, useState} from 'react';
import {
  cLogin_error,
  cLogin_input,
  cLogin_label,
  cLogin_inputError,
  cLogin_login,
  cLogin_submit,
} from './LoginForm.styles';
import {ApiError} from '@utils/types/api';
import {User} from '@schemas/user/user.schema';
import {useRouter} from 'next/navigation';
import createJwt from '@utils/functions/jwt/createJwt';
import setUserCookie from '@actions/cookies/setUserCookie';
import logUser from '@actions/user/logUser';

/**
 * Form to log the user in
 */
export default function LoginForm() {
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const router = useRouter();

  /**
   * Login form submission
   *
   * @param {FormEvent<HTMLFormElement>} event : the submission event
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // reset errors and prevent default behavior
    event.preventDefault();
    setPasswordError(false);
    setEmailError(false);
    setError('');

    // get form data
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // log the user
    const login: User | ApiError = await logUser(email, password, 'email');

    // if the login failed
    if ('error' in login) {
      // if the user does not exist
      if (login.error.code === 404) {
        setError('Aucun compte associé à cet email');
        setEmailError(true);
        return;
      }

      // if the password is incorrect
      if (login.error.message === 'Password is incorrect') {
        setError('Mot de passe incorrect');
        setPasswordError(true);
        return;
      }

      // otherwise
      setError('Une erreur est survenue, veuillez réessayer');
      return;
    }

    // create user jwt and set it in cookies
    const userJwt = await createJwt(login);
    setUserCookie(userJwt);

    // reset the form and redirect to the home page
    target.reset();
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className={cLogin_login}>
      <h3 className={cLogin_error}>{error}</h3>
      <label htmlFor='email' className={cLogin_label}>
        Email
        <input
          type='email'
          name='email'
          className={`${cLogin_input} ${cLogin_inputError(emailError)}`}
          placeholder='john.doe@gmail.com'
        />
      </label>
      <label htmlFor='password' className={cLogin_label}>
        Mot de passe{' '}
        <input
          type='password'
          name='password'
          className={`${cLogin_input} ${cLogin_inputError(passwordError)}`}
          placeholder='CL6T3Yxi$Mnfnfs8'
        />
      </label>
      <button type='submit' className={cLogin_submit}>
        Connexion
      </button>
    </form>
  );
}
