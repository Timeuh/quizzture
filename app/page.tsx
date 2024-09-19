import {css} from '@/styled-system/css';
import {hstack, vstack} from '@/styled-system/patterns';
import Image from 'next/image';

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
      <div
        className={hstack({
          gap: 8,
          justifyContent: 'center',
        })}
      >
        <Image
          src={'/images/logo.png'}
          alt={'quizz logo'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={css({
            h: 'auto',
            rotate: '-20deg',
            w: 36,
          })}
        />
        <h1
          className={css({
            color: 'nyanza.200',
            fontSize: '8xl',
            fontWeight: 'bold',
          })}
        >
          QuizzTure
        </h1>
        <Image
          src={'/images/logo.png'}
          alt={'quizz logo'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={css({
            h: 'auto',
            rotate: '20deg',
            w: 36,
          })}
        />
      </div>
      <h2
        className={css({
          color: 'platinum.light',
          fontSize: '3xl',
          fontWeight: 'bold',
        })}
      >
        Mesurez votre culture et montrez qui est le plus fort !
      </h2>
    </main>
  );
}
