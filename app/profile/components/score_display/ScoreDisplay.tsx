import {cScoreDisplay_display, cScoreDisplay_scoreContainer, cScoreDisplay_title} from './ScoreDisplay.styles';

type Props = {
  score: number;
  title: string;
  isEven: boolean;
  showPoints?: boolean;
};

/**
 * Display a titled score
 *
 * @param {number} score - The score to display
 * @param {string} title - The title of the score
 * @param {boolean} isEven - is the display on an even row
 * @param {boolean} showPoints - does the components display a 'pts' suffix
 */
export default function ScoreDisplay({score, title, isEven, showPoints}: Props) {
  return (
    <div className={cScoreDisplay_display(showPoints)}>
      <h2 className={cScoreDisplay_title}>{title}</h2>
      <div className={cScoreDisplay_scoreContainer(isEven)}>
        {score}
        {showPoints && <span>pts</span>}
      </div>
    </div>
  );
}
