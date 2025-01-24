import {css} from '@styles/css';
import {vstack} from '@styles/patterns';

export const cAnswerZone_container = vstack({
  w: 'full',
  border: '2px solid',
  borderColor: 'platinum.600',
  borderRadius: 'md',
  bg: 'platinum.dark',
  alignItems: 'start',
  p: 3,
});

export const cAnswerZone_input = css({
  fontSize: 'xl',
  w: 'full',
  color: 'platinum.light',
  h: 'full',
  _placeholder: {
    color: 'platinum.main',
  },
  outline: 'none',
});
