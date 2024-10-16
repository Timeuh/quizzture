import {vstack} from '@styles/patterns';

export const cGameCategory_category = (
  isFirst: boolean | undefined,
  isFirstLastRow: boolean | undefined,
  isLastFirstRow: boolean | undefined,
  isActive: boolean,
) => {
  return vstack({
    gap: 0,
    bg: isActive ? 'nyanza.200' : 'platinum.dark',
    color: isActive ? 'platinum.dark' : 'platinum.light',
    p: 4,
    h: '10vh',
    justifyContent: 'center',
    borderTopRightRadius: isLastFirstRow ? 'md' : 'none',
    borderTopLeftRadius: isFirst ? 'md' : 'none',
    borderBottomLeftRadius: isFirstLastRow ? 'md' : 'none',
    cursor: 'pointer',
  });
};
