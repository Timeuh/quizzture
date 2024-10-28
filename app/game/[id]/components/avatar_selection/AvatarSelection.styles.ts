import {css} from '@styles/css';
import {circle, hstack} from '@styles/patterns';

export const cAvatarSelection_image = circle({
  size: '10em',
  objectFit: 'cover',
});

export const cAvatarSelection_container = hstack({
  gap: 4,
});

export const cAvatarSelection_chevron = css({
  h: 'auto',
  w: 10,
  cursor: 'pointer',
});
