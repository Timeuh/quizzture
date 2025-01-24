import {circle, hstack} from '@styles/patterns';
import {PlayerProfileBackground} from '@utils/types/game';

export const cPlayerDisplay_display = (background: PlayerProfileBackground) => {
  return hstack({
    gap: 4,
    bg: background === 'transparent' ? 'none' : 'platinum.700',
    borderRadius: 'md',
    p: 4,
    w: '15vw',
    fontSize: 'lg',
  });
};

export const cPlayerDisplay_picture = circle({
  size: 14,
});
