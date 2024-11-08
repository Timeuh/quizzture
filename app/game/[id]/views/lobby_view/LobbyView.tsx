'use client';

import {useState} from 'react';
import PlayerList from '../../components/player_list/PlayerList';
import ProfileSelection from '../../components/profile_selection/ProfileSelection';
import {vLobbyView_lobbyView} from './LobbyView.styles';
import {GameState} from '@utils/types/game';
import GameConfiguration from '../../components/game_configuration/GameConfiguration';

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

  switch (gameState) {
    case 'lobby':
      return (
        <section className={vLobbyView_lobbyView}>
          <GameConfiguration gameId={gameId} />
          <ProfileSelection gameId={gameId} togglePLayerList={toggleNextState} />
        </section>
      );

    case 'players':
      return (
        <section className={vLobbyView_lobbyView}>
          <GameConfiguration gameId={gameId} />
          <PlayerList />
        </section>
      );

    default:
      return <></>;
  }
}
