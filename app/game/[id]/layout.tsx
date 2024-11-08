import {ReactNode} from 'react';
import PlayersProvider from './providers/PlayersProvider';

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
      <PlayersProvider gameId={params.id}>{children}</PlayersProvider>
    </main>
  );
}
