import Logout from '@components/icons/Logout';
import Profile from '@components/icons/Profile';
import {cNavMenu_link, cNavMenu_menu} from '@components/nav_menu/NavMenu.styles';
import Link from 'next/link';

type Props = {
  shouldDisplay: boolean;
  hideSelf: () => void;
};

export default function NavMenu({shouldDisplay, hideSelf}: Props) {
  return (
    <nav className={cNavMenu_menu(shouldDisplay)}>
      <Link href='/profile' className={cNavMenu_link} onClick={hideSelf}>
        <Profile className='' />
        <h3>Profil</h3>
      </Link>
      <Link href='/logout' className={cNavMenu_link} onClick={hideSelf}>
        <Logout className='' />
        <h3>Déconnexion</h3>
      </Link>
    </nav>
  );
}
