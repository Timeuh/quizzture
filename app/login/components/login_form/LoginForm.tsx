'use client';

import {FormEvent, useState} from 'react';
import {
  cRegister_error,
  cRegister_input,
  cRegister_label,
  cRegister_inputError,
  cRegister_register,
  cRegister_submit,
} from './LoginForm.styles';
import {ApiError} from '@utils/types/api';
import {User} from '@schemas/user/user.schema';
import {useRouter} from 'next/navigation';
import createJwt from '@utils/functions/jwt/createJwt';
import setUserCookie from '@actions/cookies/setUserCookie';
import logUser from '@actions/user/logUser';

export default function LoginForm() {
  const [passwordRepeatError, setPasswordRepeatError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // reset errors and prevent default behavior
    event.preventDefault();
    setPasswordRepeatError(false);
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
    <form onSubmit={handleSubmit} className={cRegister_register}>
      <h3 className={cRegister_error}>{error}</h3>
      <label htmlFor='email' className={cRegister_label}>
        Email
        <input
          type='email'
          name='email'
          className={`${cRegister_input} ${cRegister_inputError(emailError)}`}
          placeholder='john.doe@gmail.com'
        />
      </label>
      <label htmlFor='password' className={cRegister_label}>
        Mot de passe{' '}
        <input
          type='password'
          name='password'
          className={`${cRegister_input} ${cRegister_inputError(passwordRepeatError)}`}
          placeholder='CL6T3Yxi$Mnfnfs8'
        />
      </label>
      <button type='submit' className={cRegister_submit}>
        Connexion
      </button>
    </form>
  );
}
