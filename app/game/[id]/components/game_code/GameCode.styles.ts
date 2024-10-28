import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

export const cGameCode_container = vstack({
  gap: 2,
  alignItems: 'start',
});

export const cGameCode_title = css({
  fontSize: 'xl',
});

export const cGameCode_codeContainer = hstack({
  gap: 4,
  position: 'relative',
});

export const cGameCode_code = hstack({
  gap: 0,
  bg: 'nyanza.200',
  color: 'platinum.dark',
  border: '2px solid',
  borderColor: 'nyanza.700',
  borderRadius: 'sm',
  textAlign: 'center',
  fontSize: 'lg',
  p: 1,
  pointerEvents: 'none',
});

export const cGameCode_copy = css({
  bg: 'nyanza.200',
  color: 'platinum.dark',
  border: '2px solid',
  borderColor: 'nyanza.700',
  borderRadius: 'sm',
  textAlign: 'center',
  fontSize: 'lg',
  p: 1,
});

export const cGameCode_tooltip = (showTooltip: boolean) => {
  return css({
    position: 'absolute',
    opacity: showTooltip ? 100 : 0,
    top: -8,
    right: -10,
    p: 1,
    bg: 'platinum.dark',
    color: 'platinum.light',
    borderRadius: 'sm',
    transition: 'opacity 0.2s',
  });
};
