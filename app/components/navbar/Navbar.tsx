'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  cNavbar_accountContainer,
  cNavbar_createAccountButton,
  cNavbar_loginButton,
  cNavbar_logo,
  cNavbar_navbar,
  cNavbar_title,
} from '@components/navbar/Navbar.styles';
import {useUserContext} from '@providers/UserProvider';
import {UserPayload} from '@utils/types/api';
import React from 'react';

export default function Navbar() {
  const user: UserPayload | null = useUserContext();
  console.log(user);

  return (
    <nav className={cNavbar_navbar}>
      <Link href={'/'} className={cNavbar_title}>
        QuizzTure
        <Image
          src={'/images/logo.png'}
          alt={'quizz logo'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={cNavbar_logo}
        />
      </Link>
      <div className={cNavbar_accountContainer}>
        {user ? (
          <h1>{user.payload.email}</h1>
        ) : (
          <React.Fragment>
            <Link href={'/login'} className={cNavbar_loginButton}>
              se connecter
            </Link>
            <Link href={'/register'} className={cNavbar_createAccountButton}>
              créer un compte
            </Link>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}
