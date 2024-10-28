import LobbyView from './views/lobby_view/LobbyView';

type Props = {
  params: {
    id: string;
  };
};

/**
 * Game page
 */
export default function Game({params}: Props) {
  return <LobbyView gameId={params.id} />;
}
