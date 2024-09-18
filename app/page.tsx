import {css} from '@/styled-system/css';
import {vstack} from '@/styled-system/patterns';

export default function Home() {
  return (
    <main
      className={vstack({
        bgGradient: 'to-b',
        gradientFrom: 'nyanza.800',
        gradientTo: 'platinum.dark',
        gap: 4,
        h: 'screen',
        justifyContent: 'center',
      })}
    >
      <h1
        className={css({
          color: 'nyanza.200',
          fontSize: '6xl',
          fontWeight: 'bold',
        })}
      >
        QuizzTure
      </h1>
      <h2
        className={css({
          color: 'platinum.light',
          fontSize: '3xl',
        })}
      >
        Mesurez votre culture et montrez qui est le plus fort !
      </h2>
    </main>
  );
}
