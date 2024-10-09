import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

// css : login view container
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

// css : title
export const vLogin_title = css({
  fontSize: '3xl',
});

// css : separator line
export const vLogin_separator = css({
  h: 0.5,
  w: '5vw',
  bg: 'platinum.light',
});

// css : login means separation
export const vLogin_separatorContainer = hstack({
  gap: 4,
});

// css : separator text
export const vLogin_separatorText = css({
  fontSize: '2xl',
  color: 'nyanza.300',
});
