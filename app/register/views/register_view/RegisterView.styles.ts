import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

// css : register view container
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

// css : title
export const vRegister_title = css({
  fontSize: '3xl',
});

// css : separator line
export const vRegister_separator = css({
  h: 0.5,
  w: '5vw',
  bg: 'platinum.light',
});

// css : registration means separation
export const vRegister_separatorContainer = hstack({
  gap: 4,
});

// css : separator text
export const vRegister_separatorText = css({
  fontSize: '2xl',
  color: 'nyanza.300',
});
