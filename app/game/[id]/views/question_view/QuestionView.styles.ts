import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

export const vQuestionView_container = vstack({
  h: '3/4',
  w: '100%',
});

export const vQuestionView_header = hstack({
  justifyContent: 'space-between',
  w: '3/5',
});

export const vQuestionView_questionCount = css({
  fontSize: '3xl',
});
