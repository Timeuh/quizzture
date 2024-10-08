import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

// css : not found container
export const vNotFound_notFound = vstack({
  bg: 'platinum.dark',
  color: 'platinum.light',
  gap: 8,
  h: 'screen',
  w: 'full',
  justifyContent: 'center',
});

// css : title
export const vNotFound_title = css({
  fontSize: '6xl',
});

// css : link to home page
export const vNotFound_link = hstack({
  bg: {
    base: 'nyanza.200',
    _hover: 'nyanza.main',
  },
  borderRadius: 'sm',
  color: 'platinum.dark',
  fontSize: '2xl',
  gap: 4,
  justifyContent: 'center',
  p: 2,
  w: '20vw',
  cursor: 'pointer',
  transition: 'background-color 0.5s',
});

// css : app logo
export const vNotFound_logo = hstack({
  h: 'auto',
  w: 36,
});
