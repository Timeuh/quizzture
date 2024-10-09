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
  cNavbar_userPicture,
  cNavbar_userProfile,
} from '@components/navbar/Navbar.styles';
import {useUserContext} from '@providers/UserProvider';
import {UserPayload} from '@utils/types/api';
import React, {useState} from 'react';
import NavMenu from '@components/nav_menu/NavMenu';

/**
 * Navigation bar
 */
export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // get the user from the context
  const user: UserPayload | null = useUserContext();

  /**
   * Toggle the user nav menu opening
   */
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={cNavbar_navbar}>
        <Link href={'/'} className={cNavbar_title}>
          QuizzTure
          <Image
            src={'/images/logo.png'}
            alt={'quizz logo'}
            width={50}
            height={50}
            sizes={'100vw'}
            className={cNavbar_logo}
          />
        </Link>
        <div className={cNavbar_accountContainer}>
          {user ? (
            <button onClick={toggleMenu} className={cNavbar_userProfile}>
              <h3>{user.payload.username}</h3>
              <Image
                src={user.payload.picture}
                alt={'quizz logo'}
                width={50}
                height={50}
                sizes={'100vw'}
                className={cNavbar_userPicture}
              />
            </button>
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
      <NavMenu shouldDisplay={showMenu} hideSelf={toggleMenu} />
    </>
  );
}
