import {ReactNode, useState} from 'react';
import {cGameCategory_category} from './GameCategory.styles';

type Props = {
  name: string;
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
export default function GameCategory({name, children, isFirst, isFirstLastRow, isLastFirstRow: isLastOfRow}: Props) {
  const [isActive, setIsActive] = useState<boolean>(true);

  /**
   * Toggle category active state
   */
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      type='button'
      className={cGameCategory_category(isFirst, isFirstLastRow, isLastOfRow, isActive)}
      onClick={toggleActive}
    >
      {children}
      <h4>{name}</h4>
      <input type='checkbox' checked={true} value={name} hidden />
    </button>
  );
}
