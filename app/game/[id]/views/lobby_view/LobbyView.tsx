'use client';

import {useState} from 'react';
import GameConfiguration from '../../components/game_configuration/GameConfiguration';
import PlayerList from '../../components/player_list/PlayerList';
import ProfileSelection from '../../components/profile_selection/ProfileSelection';
import {vLobbyView_lobbyView} from './LobbyView.styles';
import {GameState} from '@utils/types/game';
import PlayersProvider from '../../providers/PlayersProvider';

type Props = {
  gameId: string;
};

/**
 * Main lobby view
 *
 * @param {string} gameId : current game unique id
 */
export default function LobbyView({gameId}: Props) {
  const [gameState, setGameState] = useState<GameState>('lobby');

  /**
   * Toggle players game state after lobby
   */
  const toggleNextState = () => {
    setGameState('players');
  };

  return (
    <main className={vLobbyView_lobbyView}>
      <PlayersProvider gameId={gameId}>
        <GameConfiguration gameId={gameId} />
        {gameState === 'lobby' ? (
          <ProfileSelection gameId={gameId} togglePLayerList={toggleNextState} />
        ) : (
          <PlayerList />
        )}
      </PlayersProvider>
    </main>
  );
}
