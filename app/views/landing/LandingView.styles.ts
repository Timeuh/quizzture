import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

export const vLanding_landing = vstack({
  bgGradient: 'to-b',
  gradientFrom: 'nyanza.800',
  gradientTo: 'platinum.dark',
  gap: 4,
  h: 'screen',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
});

export const vLanding_titleContainer = hstack({
  gap: 8,
  justifyContent: 'center',
});

export const vLanding_leftLogo = css({
  h: 'auto',
  rotate: '-20deg',
  w: 36,
});

export const vLanding_rightLogo = css({
  h: 'auto',
  rotate: '20deg',
  w: 36,
});

export const vLanding_title = css({
  color: 'nyanza.200',
  fontSize: '8xl',
  fontWeight: 'bold',
});

export const vLanding_subtitle = css({
  color: 'platinum.light',
  fontSize: '3xl',
  fontWeight: 'bold',
});

export const vLanding_buttonsContainer = vstack({
  pt: 16,
  gap: 8,
  justifyContent: 'center',
});

export const vLanding_playButton = hstack({
  bg: 'nyanza.200',
  borderRadius: 'sm',
  color: 'platinum.dark',
  fontSize: '2xl',
  gap: 4,
  justifyContent: 'center',
  p: 2,
  w: '20vw',
  cursor: 'pointer',
});

export const vLanding_gamepad = css({
  h: 'auto',
  w: 8,
});

export const vLanding_joinButton = hstack({
  borderRadius: 'sm',
  border: '2px solid',
  borderColor: 'nyanza.200',
  color: 'platinum.light',
  fontSize: '2xl',
  gap: 4,
  justifyContent: 'center',
  p: 2,
  w: '20vw',
  cursor: 'pointer',
});

export const vLanding_join = css({
  h: 'auto',
  w: 8,
});
