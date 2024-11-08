'use client';

import {useState} from 'react';
import PlayerList from '../../components/player_list/PlayerList';
import ProfileSelection from '../../components/profile_selection/ProfileSelection';
import {vGameView_container} from './GameView.styles';
import {GameState} from '@utils/types/game';
import GameConfiguration from '../../components/game_configuration/GameConfiguration';
import QuestionView from '../question_view/QuestionView';

type Props = {
  gameId: string;
};

/**
 * Main game view
 *
 * @param {string} gameId : current game unique id
 */
export default function GameView({gameId}: Props) {
  const [gameState, setGameState] = useState<GameState>('lobby');

  /**
   * Toggle players game state after lobby
   */
  const togglePlayerView = () => {
    setGameState('players');
  };

  switch (gameState) {
    case 'lobby':
      return (
        <section className={vGameView_container}>
          <GameConfiguration gameId={gameId} />
          <ProfileSelection gameId={gameId} togglePLayerList={togglePlayerView} />
        </section>
      );

    case 'players':
      return (
        <section className={vGameView_container}>
          <GameConfiguration gameId={gameId} />
          <PlayerList />
        </section>
      );

    case 'question':
      return (
        <section className={vGameView_container}>
          <QuestionView />
        </section>
      );

    default:
      return <></>;
  }
}
