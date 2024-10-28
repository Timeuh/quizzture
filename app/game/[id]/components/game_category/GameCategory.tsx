import {ReactNode} from 'react';
import {cGameCategory_category} from './GameCategory.styles';

type Props = {
  name: string;
  value: boolean;
  setValue: (value: boolean) => void;
  children: ReactNode;
  isFirst?: boolean;
  isLastFirstRow?: boolean;
  isFirstLastRow?: boolean;
};

/**
 * Game configuration category selector
 *
 * @param {string} name : the category name
 * @param {ReactNode} children : the category icon
 */
export default function GameCategory({
  name,
  value,
  setValue,
  children,
  isFirst,
  isFirstLastRow,
  isLastFirstRow: isLastOfRow,
}: Props) {
  /**
   * Toggle category active state
   */
  const toggleActive = () => {
    setValue(!value);
  };

  return (
    <button
      type='button'
      className={cGameCategory_category(isFirst, isFirstLastRow, isLastOfRow, value)}
      onClick={toggleActive}
    >
      {children}
      <h4>{name}</h4>
    </button>
  );
}
