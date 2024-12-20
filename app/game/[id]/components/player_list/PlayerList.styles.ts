import {css} from '@styles/css';
import {grid, vstack} from '@styles/patterns';

export const cPLayerList_display = vstack({
  gap: 0,
  justifyContent: 'space-between',
  h: '2/3',
  w: '1/3',
});

export const cPLayerList_playersContainer = grid({
  columns: 2,
  rowGap: 6,
  columnGap: 8,
  justifyContent: 'space-between',
});

export const cPLayerList_button = css({
  color: {
    _hover: 'platinum.light',
    base: 'platinum.dark',
  },
  bg: {
    _hover: 'nyanza.600',
    base: 'nyanza.200',
  },
  borderRadius: 'md',
  fontSize: 'xl',
  w: '20vw',
  p: 2,
  transition: 'all 0.5s',
  cursor: 'pointer',
});
