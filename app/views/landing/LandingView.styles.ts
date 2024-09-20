import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

const vLanding_landing = vstack({
  bgGradient: 'to-b',
  gradientFrom: 'nyanza.800',
  gradientTo: 'platinum.dark',
  gap: 4,
  h: 'screen',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
});

const vLanding_titleContainer = hstack({
  gap: 8,
  justifyContent: 'center',
});

const vLanding_leftLogo = css({
  h: 'auto',
  rotate: '-20deg',
  w: 36,
});

const vLanding_rightLogo = css({
  h: 'auto',
  rotate: '20deg',
  w: 36,
});

const vLanding_title = css({
  color: 'nyanza.200',
  fontSize: '8xl',
  fontWeight: 'bold',
});

const vLanding_subtitle = css({
  color: 'platinum.light',
  fontSize: '3xl',
  fontWeight: 'bold',
});

const vLanding_buttonsContainer = vstack({
  pt: 16,
  gap: 8,
  justifyContent: 'center',
});

const vLanding_playButton = hstack({
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

const vLanding_gamepad = css({
  h: 'auto',
  w: 8,
});

const vLanding_joinButton = hstack({
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

const vLanding_join = css({
  h: 'auto',
  w: 8,
});

export {
  vLanding_landing,
  vLanding_titleContainer,
  vLanding_leftLogo,
  vLanding_rightLogo,
  vLanding_title,
  vLanding_subtitle,
  vLanding_buttonsContainer,
  vLanding_playButton,
  vLanding_gamepad,
  vLanding_joinButton,
  vLanding_join,
};
