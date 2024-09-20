import {css} from '@styles/css';
import {vstack} from '@styles/patterns';

export const cLines_container = (direction: 'left' | 'right') => {
  return vstack({
    position: 'absolute',
    bottom: '-10vw',
    left: direction === 'left' ? '-15vw' : 'none',
    right: direction === 'left' ? 'none' : '-15vw',
    gap: 3.5,
    h: 'fit-content',
    rotate: direction === 'left' ? '50deg' : '-50deg',
    w: 'fit',
  });
};

export const cLines_line = css({
  bg: 'nyanza.200',
  h: 0.4,
  w: '50vw',
});
