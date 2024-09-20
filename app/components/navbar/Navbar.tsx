import Link from 'next/link';
import Image from 'next/image';
import {
  cNavbar_accountContainer,
  cNavbar_createAccountButton,
  cNavbar_logo,
  cNavbar_navbar,
  cNavbar_title,
} from '@components/navbar/Navbar.styles';

export default function Navbar() {
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
        <Link href={'/login'}>se connecter</Link>
        <Link href={'/register'} className={cNavbar_createAccountButton}>
          créer un compte
        </Link>
      </div>
    </nav>
  );
}
