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

export const vLanding_gamepad = css({
  h: 'auto',
  w: 8,
});

export const vLanding_joinButton = hstack({
  borderRadius: 'sm',
  border: '2px solid',
  borderColor: {
    base: 'nyanza.200',
    _hover: 'nyanza.main',
  },
  color: {
    base: 'platinum.light',
    _hover: 'nyanza.light',
  },
  fontSize: '2xl',
  gap: 4,
  justifyContent: 'center',
  p: 2,
  w: '20vw',
  cursor: 'pointer',
  transition: 'all 0.5s',
});

export const vLanding_join = css({
  h: 'auto',
  w: 8,
});
