import GameConfiguration from '../../components/game_configuration/GameConfiguration';
import ProfileSelection from '../../components/profile_selection/ProfileSelection';
import {vLobbyView_lobbyView} from './LobbyView.styles';

type Props = {
  gameId: string;
};

/**
 * Main lobby view
 *
 * @param {string} gameId : current game unique id
 */
export default function LobbyView({gameId}: Props) {
  return (
    <main className={vLobbyView_lobbyView}>
      <GameConfiguration gameId={gameId} />
      <ProfileSelection />
    </main>
  );
}
