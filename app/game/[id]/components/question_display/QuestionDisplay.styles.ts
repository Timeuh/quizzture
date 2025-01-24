import {css} from '@styles/css';
import {vstack} from '@styles/patterns';

export const cQuestionDisplay_container = vstack({
  w: 'full',
  h: '60%',
  border: '2px solid',
  borderColor: 'nyanza.light',
  borderRadius: 'md',
  bg: 'platinum.800',
  gap: 6,
  pt: 4,
});

export const cQuestionDisplay_questionNumber = css({
  fontSize: '4xl',
  color: 'nyanza.400',
});

export const cQuestionDisplay_questionHeading = css({
  fontSize: '2xl',
});
