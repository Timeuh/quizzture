import {css} from '@styles/css';
import {circle, hstack} from '@styles/patterns';

export const cNavbar_navbar = hstack({
  color: 'platinum.light',
  backgroundColor: 'platinum.dark',
  h: 16,
  justifyContent: 'space-between',
  p: 2,
  px: 8,
  position: 'fixed',
  shadow: '0 2px 6px 0 token(colors.platinum.light_25)',
  top: 0,
  w: 'full',
  zIndex: 2,
});

export const cNavbar_title = hstack({
  color: 'nyanza.200',
  fontSize: '3xl',
  fontWeight: 'bold',
  gap: 6,
});

export const cNavbar_logo = css({
  h: 'auto',
  w: 16,
});

export const cNavbar_accountContainer = hstack({
  gap: 6,
});

export const cNavbar_createAccountButton = css({
  p: 1,
  px: 2,
  bg: {
    base: 'nyanza.200',
    _hover: 'platinum.light',
  },
  color: 'platinum.dark',
  borderRadius: 'md',
  transition: 'background-color 0.5s',
});

export const cNavbar_loginButton = css({
  color: {
    base: 'platinum.light',
    _hover: 'nyanza.200',
  },
  transition: 'all 0.5s',
});

export const cNavbar_userProfile = hstack({
  gap: 4,
  cursor: 'pointer',
});

export const cNavbar_userPicture = circle({
  size: 10,
});
