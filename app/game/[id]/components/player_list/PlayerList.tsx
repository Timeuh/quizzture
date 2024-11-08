import {Player} from '@utils/types/game';
import PlayerDisplay from '@components/player_display/PlayerDisplay';
import {cPLayerList_button, cPLayerList_display, cPLayerList_playersContainer} from './PlayerList.styles';
import {useGameContext} from '../../providers/GameProvider';

/**
 * Display every player in the game
 */
export default function PlayerList() {
  const {players, isHost, changeGameState} = useGameContext();

  return (
    <section className={cPLayerList_display}>
      <div className={cPLayerList_playersContainer}>
        {players.map((player: Player, index: number) => {
          return <PlayerDisplay key={index} player={player} />;
        })}
      </div>
      {isHost && (
        <button
          className={cPLayerList_button}
          onClick={() => {
            return changeGameState('question');
          }}
        >
          Démarrer
        </button>
      )}
    </section>
  );
}
