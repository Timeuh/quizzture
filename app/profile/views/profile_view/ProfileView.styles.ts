import {css} from '@styles/css';
import {circle, grid, vstack} from '@styles/patterns';

// css : the profile view main container
export const vProfile_profile = vstack({
  h: 'screen',
  w: 'full',
  gap: 0,
  justifyContent: 'center',
  bgGradient: 'to-b',
  gradientFrom: 'nyanza.800',
  gradientTo: 'platinum.dark',
  color: 'platinum.light',
});

// css : the profile container
export const vProfile_container = vstack({
  bg: 'platinum.800',
  borderRadius: 'lg',
  border: '2px solid',
  borderColor: 'nyanza.light',
  w: '1/3',
  gap: 8,
  justifyContent: 'center',
  p: 8,
});

// css : the score display container
export const vProfile_scoreContainer = grid({
  columns: 2,
  gap: 8,
  w: 'full',
  justifyItems: 'center',
});

// css : the username
export const vProfile_username = css({
  fontSize: '2xl',
});

// css : the profile picture
export const vProfile_picture = circle({
  size: 24,
});

// css : the profile picture and name container
export const vProfile_profileContainer = vstack({
  gap: 2,
  justifyContent: 'center',
});
