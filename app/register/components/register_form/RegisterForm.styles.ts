import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

export const cRegister_register = vstack({
  gap: 4,
});

export const cRegister_input = css({
  bg: 'platinum.light',
  color: 'platinum.dark',
  outlineColor: 'platinum.dark',
  _placeholder: {
    color: 'platinum.main',
  },
  fontSize: 'lg',
  borderRadius: 'md',
  p: 2,
  w: 'full',
});

export const cRegister_label = vstack({
  gap: 1,
  alignItems: 'start',
  fontSize: 'lg',
  w: '20vw',
});

export const cRegister_submit = hstack({
  bg: {
    base: 'nyanza.300',
    _hover: 'nyanza.main',
  },
  borderRadius: 'md',
  color: 'platinum.dark',
  outlineColor: 'platinum.dark',
  p: 2,
  mt: 8,
  gap: 0,
  fontSize: 'xl',
  justifyContent: 'center',
  w: '20vw',
  transition: 'background-color 0.5s',
  cursor: 'pointer',
});
