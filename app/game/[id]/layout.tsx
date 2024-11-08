import {ReactNode} from 'react';
import GameProvider from './providers/GameProvider';

type Props = {
  params: {
    id: string;
  };
  children: ReactNode;
};

/**
 * Game page
 */
export default function Game({params, children}: Props) {
  return (
    <main>
      <GameProvider gameId={params.id}>{children}</GameProvider>
    </main>
  );
}
