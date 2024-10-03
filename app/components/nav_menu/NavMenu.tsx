import logout from '@actions/user/logout';
import Logout from '@components/icons/Logout';
import Profile from '@components/icons/Profile';
import {cNavMenu_link, cNavMenu_menu} from '@components/nav_menu/NavMenu.styles';
import Link from 'next/link';

type Props = {
  shouldDisplay: boolean;
  hideSelf: () => void;
};

export default function NavMenu({shouldDisplay, hideSelf}: Props) {
  const handleLogout = () => {
    hideSelf();
    logout();
  };

  return (
    <nav className={cNavMenu_menu(shouldDisplay)}>
      <Link href='/profile' className={cNavMenu_link} onClick={hideSelf}>
        <Profile className='' />
        <h3>Profil</h3>
      </Link>
      <button className={cNavMenu_link} onClick={handleLogout}>
        <Logout className='' />
        <h3>Déconnexion</h3>
      </button>
    </nav>
  );
}
