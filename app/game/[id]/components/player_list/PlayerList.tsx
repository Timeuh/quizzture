import {Player} from '@utils/types/game';
import PlayerDisplay from '@components/player_display/PlayerDisplay';
import {cPLayerList_button, cPLayerList_display, cPLayerList_playersContainer} from './PlayerList.styles';
import {useGameContext} from '../../providers/GameProvider';
import {socket} from '@socket';

type Props = {
  gameId: string;
};

/**
 * Display every player in the game
 */
export default function PlayerList({gameId}: Props) {
  const {players, isHost, changeGameState} = useGameContext();

  const startGame = () => {
    if (socket.connected) {
      socket.emit('start_game', {gameId});
    }
  };

  return (
    <section className={cPLayerList_display}>
      <div className={cPLayerList_playersContainer}>
        {players.map((player: Player, index: number) => {
          return <PlayerDisplay background='waiting' key={index} player={player} />;
        })}
      </div>
      {isHost && (
        <button
          className={cPLayerList_button}
          onClick={() => {
            startGame();
            changeGameState('question');
          }}
        >
          Démarrer
        </button>
      )}
    </section>
  );
}
