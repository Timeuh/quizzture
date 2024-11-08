'use client';

import PlayerList from '../../components/player_list/PlayerList';
import ProfileSelection from '../../components/profile_selection/ProfileSelection';
import {vGameView_container} from './GameView.styles';
import GameConfiguration from '../../components/game_configuration/GameConfiguration';
import QuestionView from '../question_view/QuestionView';
import {useGameContext} from '../../providers/GameProvider';

type Props = {
  gameId: string;
};

/**
 * Main game view
 *
 * @param {string} gameId : current game unique id
 */
export default function GameView({gameId}: Props) {
  const {gameState} = useGameContext();

  switch (gameState) {
    case 'lobby':
      return (
        <section className={vGameView_container}>
          <GameConfiguration gameId={gameId} />
          <ProfileSelection gameId={gameId} />
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
