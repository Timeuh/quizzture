import {vstack} from '@styles/patterns';

type Props = {
  params: {
    id: string;
  };
};

/**
 * Game page
 */
export default function Game({params}: Props) {
  const vGame_game = vstack({
    gap: 4,
    justifyContent: 'center',
    h: 'screen',
    w: 'full',
    color: 'platinum.light',
    bgGradient: 'to-b',
    gradientFrom: 'platinum.dark',
    gradientVia: 'platinum.dark',
    gradientTo: 'nyanza.800',
  });

  return (
    <main className={vGame_game}>
      <h1>Game page {params.id}</h1>
    </main>
  );
}
