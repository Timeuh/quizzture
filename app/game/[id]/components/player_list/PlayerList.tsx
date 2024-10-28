import {Player} from '@utils/types/game';
import PlayerDisplay from '@components/player_display/PlayerDisplay';
import {cPLayerList_button, cPLayerList_display, cPLayerList_playersContainer} from './PlayerList.styles';
import {usePlayersListContext} from '../../providers/PlayersProvider';

/**
 * Display every player in the game
 */
export default function PlayerList() {
  const {players, isHost} = usePlayersListContext();

  return (
    <section className={cPLayerList_display}>
      <div className={cPLayerList_playersContainer}>
        {players.map((player: Player, index: number) => {
          return <PlayerDisplay key={index} player={player} />;
        })}
      </div>
      {isHost && <button className={cPLayerList_button}>Démarrer</button>}
    </section>
  );
}
