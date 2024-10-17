import {css} from '@styles/css';
import {circle, vstack} from '@styles/patterns';

export const cProfileSelection_container = vstack({
  gap: 8,
  alignItems: 'center',
  w: '15vw',
});

export const cProfileSelection_input = css({
  w: 'full',
  p: 2,
  color: 'platinum.light',
  bg: 'platinum.dark',
  rounded: 'md',
  border: '1px solid',
  borderColor: 'platinum.light',
  outline: 'none',
  _focus: {
    borderColor: 'nyanza.main',
  },
  fontSize: 'lg',
});

export const cProfileSelection_button = css({
  p: 2,
  color: {
    _hover: 'platinum.light',
    base: 'platinum.dark',
  },
  bg: {
    _hover: 'nyanza.600',
    base: 'nyanza.200',
  },
  rounded: 'md',
  w: 'full',
  fontSize: 'lg',
  cursor: 'pointer',
  transition: 'all 0.5s',
});

export const cProfileSelection_image = circle({
  size: '10em',
  objectFit: 'cover',
});
