import Copy from '@components/icons/Copy';
import {
  cGameCode_copy,
  cGameCode_codeContainer,
  cGameCode_container,
  cGameCode_code,
  cGameCode_title,
  cGameCode_tooltip,
} from './GameCode.styles';
import {useState} from 'react';
import Copied from '@components/icons/Copied';

type Props = {
  gameId: string;
};

/**
 * Game code display and copy button
 *
 * @param {string} gameId : current game unique id
 */
export default function GameCode({gameId}: Props) {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [tooltip, setTooltip] = useState<string>('Clickez pour copier');

  /**
   * Copy game code to clipboard
   */
  const copyCode = () => {
    // Copy game code to clipboard
    navigator.clipboard.writeText(gameId);
    // display copied tooltip
    setCopied(true);
    setTooltip('Code copié !');

    // reset tooltip and copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
      setTooltip('Clickez pour copier');
    }, 2000);
  };

  /**
   * Display tooltip above copy button
   */
  const displayTooltip = () => {
    setShowTooltip(true);
  };

  /**
   * Hide tooltip above copy button
   */
  const hideTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <section className={cGameCode_container}>
      <h2 className={cGameCode_title}>Code de la partie</h2>
      <div className={cGameCode_codeContainer}>
        <input type='text' value={gameId} readOnly className={cGameCode_code} />
        <h3 className={cGameCode_tooltip(showTooltip)}>{tooltip}</h3>
        <button
          type='button'
          className={cGameCode_copy}
          onClick={copyCode}
          onMouseEnter={displayTooltip}
          onMouseLeave={hideTooltip}
        >
          {copied ? <Copied className={''} /> : <Copy className={''} />}
        </button>
      </div>
    </section>
  );
}
