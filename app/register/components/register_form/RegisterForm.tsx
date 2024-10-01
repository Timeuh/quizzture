'use client';

import {FormEvent, useState} from 'react';
import {
  cRegister_error,
  cRegister_input,
  cRegister_label,
  cRegister_inputError,
  cRegister_register,
  cRegister_submit,
} from './RegisterForm.styles';
import createUser from '@actions/user/createUser';
import {ApiError} from '@utils/types/api';
import {User} from '@schemas/user/user.schema';
import {useRouter} from 'next/navigation';
import createJwt from '@utils/functions/jwt/createJwt';
import setUserCookie from '@actions/cookies/setUserCookie';

export default function RegisterForm() {
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
    const repeat = formData.get('repeat') as string;

    // check if passwords match
    if (password !== repeat) {
      setPasswordRepeatError(true);
      setError('Vos mots de passe ne correspondent pas');
      return;
    }

    // create the user
    const creation: User | ApiError = await createUser(email, password, 'email');

    // if the creation failed
    if ('error' in creation) {
      // if the email is already used
      if (creation.error.message === 'Duplicate error') {
        setError('Cet email est déjà utilisé');
        setEmailError(true);
        return;
      }

      // otherwise
      setError('Une erreur est survenue, veuillez réessayer');
      return;
    }

    // create user jwt and set it in cookies
    const userJwt = await createJwt(creation);
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
      <label htmlFor='repeat' className={cRegister_label}>
        Répéter le mot de passe
        <input
          type='password'
          name='repeat'
          className={`${cRegister_input} ${cRegister_inputError(passwordRepeatError)}`}
          placeholder='CL6T3Yxi$Mnfnfs8'
        />
      </label>
      <button type='submit' className={cRegister_submit}>
        Créer un compte
      </button>
    </form>
  );
}
