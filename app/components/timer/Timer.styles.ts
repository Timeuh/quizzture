import {css} from '@styles/css';

export const cTimer_timer = (size: number) => {
  return css({
    stroke: 'platinum.light',
    strokeWidth: 5,
    fill: 'none',
    strokeLinecap: 'round',
    transform: `rotate(-90 ${size / 2} ${size / 2})`,
  });
};
