import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';

// css : score display container
export const cScoreDisplay_display = (showPoints: boolean | undefined) => {
  return vstack({
    gap: 2,
    alignItems: showPoints ? 'center' : 'start',
  });
};

// css : score title
export const cScoreDisplay_title = css({
  fontSize: 'lg',
});

// css : score container
export const cScoreDisplay_scoreContainer = (isEven: boolean) => {
  return hstack({
    gap: 1,
    color: isEven ? 'platinum.dark' : 'platinum.light',
    bg: isEven ? 'nyanza.200' : 'platinum.dark',
    borderRadius: 'md',
    justifyContent: 'center',
    p: 1,
    w: '10vw',
    fontSize: 'lg',
  });
};
