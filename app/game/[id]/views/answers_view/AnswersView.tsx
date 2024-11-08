import {useGameContext} from '../../providers/GameProvider';

/**
 * Display current question
 */
export default function AnswersView() {
  const {isHost, changeGameState} = useGameContext();

  return (
    <section>
      <h1>AnswersView</h1>
      {isHost && (
        <button
          onClick={() => {
            return changeGameState('question');
          }}
        >
          Question suivante
        </button>
      )}
    </section>
  );
}
