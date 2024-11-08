import GameView from './views/game_view/GameView';

type Props = {
  params: {
    id: string;
  };
};

/**
 * Game page
 */
export default function Game({params}: Props) {
  return <GameView gameId={params.id} />;
}
