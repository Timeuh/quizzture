import {css} from '@styles/css';
import {grid, hstack, vstack} from '@styles/patterns';

export const cGameConfiguration_container = vstack({
  gap: 4,
  justifyContent: 'center',
  h: '2/3',
  w: '1/3',
  bg: 'platinum.800',
  border: '2px solid',
  borderColor: 'nyanza.light',
  borderRadius: 'lg',
  p: 4,
});

export const cGameConfiguration_gameCodeContainer = vstack({
  gap: 2,
  alignItems: 'start',
});

export const cGameConfiguration_gameCodeTitle = css({
  fontSize: 'xl',
});

export const cGameConfiguration_gameCode = hstack({
  gap: 4,
});

export const cGameConfiguration_gameCodeDisplay = hstack({
  gap: 0,
  bg: 'nyanza.200',
  color: 'platinum.dark',
  border: '2px solid',
  borderColor: 'nyanza.700',
  borderRadius: 'sm',
  textAlign: 'center',
  fontSize: 'lg',
  p: 1,
  pointerEvents: 'none',
});

export const cGameConfiguration_copyGameCode = css({
  bg: 'nyanza.200',
  color: 'platinum.dark',
  border: '2px solid',
  borderColor: 'nyanza.700',
  borderRadius: 'sm',
  textAlign: 'center',
  fontSize: 'lg',
  p: 1,
});

export const cGameConfiguration_gameModeContainer = vstack({
  gap: 2,
  alignItems: 'start',
  w: 'full',
});

export const cGameConfiguration_gameModeTitle = css({
  fontSize: 'xl',
});

export const cGameConfiguration_iconsContainer = hstack({
  gap: 2,
});

export const cGameConfiguration_gameModeButton = (isActive: boolean) => {
  return vstack({
    gap: 2,
    bg: isActive ? 'nyanza.200' : 'platinum.dark',
    p: 2,
    px: 5,
    borderRadius: 'md',
    fontSize: 'lg',
    color: isActive ? 'platinum.dark' : 'platinum.light',
    border: isActive ? '2px solid' : 'none',
    borderColor: 'nyanza.700',
    cursor: 'pointer',
  });
};

export const cGameConfiguration_buttonsContainer = hstack({
  gap: 4,
  justifyContent: 'space-between',
  w: 'full',
});

export const cGameConfiguration_infosContainer = hstack({
  gap: 4,
  alignItems: 'start',
  w: 'full',
});

export const cGameConfiguration_gameContainer = vstack({
  gap: 4,
  alignItems: 'start',
  w: 'full',
});

export const cGameConfiguration_gameRulesTitle = css({
  fontSize: 'xl',
});

export const cGameConfiguration_gameRules = css({
  bg: 'platinum.dark',
  borderRadius: 'md',
  p: 3,
  h: 'full',
  fontSize: 'lg',
});

export const cGameConfiguration_rulesContainer = vstack({
  gap: 2,
  h: 'full',
  alignItems: 'start',
});

export const cGameConfiguration_themesTitle = css({
  fontSize: 'xl',
});

export const cGameConfiguration_themesContainer = vstack({
  gap: 2,
  alignItems: 'start',
  w: 'full',
});

export const cGameConfiguration_themesList = grid({
  gap: 2,
  bg: 'platinum.700',
  w: 'full',
  borderRadius: 'md',
  p: 2,
  columns: 5,
  h: 'full',
});

export const cGameConfiguration_icon = css({
  w: 7,
  h: 'auto',
  flexShrink: 0,
});
