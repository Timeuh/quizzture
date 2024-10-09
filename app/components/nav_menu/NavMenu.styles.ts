import {hstack, vstack} from '@styles/patterns';

// css : navigation menu container
export const cNavMenu_menu = (shouldDisplay: boolean) => {
  return vstack({
    bg: 'platinum.dark',
    color: 'platinum.light',
    position: 'absolute',
    top: shouldDisplay ? '7.5vh' : -10,
    right: 2,
    gap: 0,
    w: '10vw',
    borderRadius: 'sm',
    alignItems: 'left',
    shadow: '0 2px 4px 0 token(colors.platinum.light_25)',
    zIndex: 1,
    transition: 'all 0.5s',
  });
};

// css : navigation menu link
export const cNavMenu_link = hstack({
  borderRadius: 'sm',
  gap: 4,
  h: 12,
  p: 2,
  ps: 4,
  bg: {
    base: 'platinum.dark',
    _hover: 'platinum.800',
  },
  transition: 'background-color 0.5s',
  cursor: 'pointer',
});
