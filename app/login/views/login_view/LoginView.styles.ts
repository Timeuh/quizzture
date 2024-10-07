import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

export const vLogin_login = vstack({
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

export const vLogin_title = css({
  fontSize: '3xl',
});

export const vLogin_separator = css({
  h: 0.5,
  w: '5vw',
  bg: 'platinum.light',
});

export const vLogin_separatorContainer = hstack({
  gap: 4,
});

export const vLogin_separatorText = css({
  fontSize: '2xl',
  color: 'nyanza.300',
});
