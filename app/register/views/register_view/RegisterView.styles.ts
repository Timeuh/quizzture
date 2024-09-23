import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

export const vRegister_register = vstack({
  color: 'platinum.light',
  bgGradient: 'to-b',
  gradientFrom: 'nyanza.800',
  gradientTo: 'platinum.dark',
  gap: 4,
  h: 'screen',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
});

export const vRegister_title = css({
  fontSize: '3xl',
});

export const vRegister_separator = css({
  h: 0.5,
  w: '5vw',
  bg: 'platinum.light',
});

export const vRegister_separatorContainer = hstack({
  gap: 4,
});

export const vRegister_separatorText = css({
  fontSize: '2xl',
  color: 'nyanza.300',
});
