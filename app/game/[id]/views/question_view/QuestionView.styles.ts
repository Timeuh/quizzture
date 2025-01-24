import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

export const vQuestionView_container = vstack({
  h: '3/4',
  w: '3/5',
  gap: 12,
});

export const vQuestionView_header = hstack({
  justifyContent: 'space-between',
  w: 'full',
});

export const vQuestionView_questionCount = css({
  w: '15vw',
  fontSize: '3xl',
  textAlign: 'right',
});
