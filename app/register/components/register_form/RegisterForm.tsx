'use client';

import {FormEvent} from 'react';
import {cRegister_input, cRegister_label, cRegister_register, cRegister_submit} from './RegisterForm.styles';
import createUser from '@actions/user/createUser';

export default function RegisterForm() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const repeat = formData.get('repeat') as string;

    if (password !== repeat) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    const creation = await createUser(email, password, 'email');
    console.log(creation);
  };

  return (
    <form onSubmit={handleSubmit} className={cRegister_register}>
      <label htmlFor='email' className={cRegister_label}>
        Email
        <input type='email' name='email' className={cRegister_input} placeholder='john.doe@gmail.com' />
      </label>
      <label htmlFor='password' className={cRegister_label}>
        Mot de passe{' '}
        <input type='password' name='password' className={cRegister_input} placeholder='CL6T3Yxi$Mnfnfs8' />
      </label>
      <label htmlFor='repeat' className={cRegister_label}>
        Répéter le mot de passe
        <input type='password' name='repeat' className={cRegister_input} placeholder='CL6T3Yxi$Mnfnfs8' />
      </label>
      <button type='submit' className={cRegister_submit}>
        Créer un compte
      </button>
    </form>
  );
}
