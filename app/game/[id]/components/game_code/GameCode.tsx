import Copy from '@components/icons/Copy';
import {
  cGameCode_copy,
  cGameCode_codeContainer,
  cGameCode_container,
  cGameCode_code,
  cGameCode_title,
} from './GameCode.styles';

type Props = {
  gameId: string;
};

/**
 * Game code display and copy button
 *
 * @param {string} gameId : current game unique id
 */
export default function GameCode({gameId}: Props) {
  return (
    <section className={cGameCode_container}>
      <h2 className={cGameCode_title}>Code de la partie</h2>
      <div className={cGameCode_codeContainer}>
        <input type='text' value={gameId} readOnly className={cGameCode_code} />
        <button type='button' className={cGameCode_copy}>
          <Copy className={''} />
        </button>
      </div>
    </section>
  );
}
