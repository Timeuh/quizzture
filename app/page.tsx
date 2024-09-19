import {css} from '@/styled-system/css';
import {hstack, vstack} from '@/styled-system/patterns';
import Image from 'next/image';

export default function Home() {
  const lines = new Array(20).fill(0);

  return (
    <main
      className={vstack({
        bgGradient: 'to-b',
        gradientFrom: 'nyanza.800',
        gradientTo: 'platinum.dark',
        gap: 4,
        h: 'screen',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
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
      <div
        id='lines-left'
        className={vstack({
          position: 'absolute',
          bottom: '-10vw',
          left: '-15vw',
          gap: 3.5,
          h: 'fit-content',
          rotate: '50deg',
          w: 'fit',
        })}
      >
        {lines.map((_, index: number) => {
          return (
            <div
              key={index}
              className={css({
                bg: 'nyanza.200',
                h: 0.4,
                w: '50vw',
              })}
            />
          );
        })}
      </div>
      <div
        id='lines-right'
        className={vstack({
          position: 'absolute',
          bottom: '-10vw',
          right: '-15vw',
          gap: 3.5,
          h: 'fit-content',
          rotate: '-50deg',
          w: 'fit',
        })}
      >
        {lines.map((_, index: number) => {
          return (
            <div
              key={index}
              className={css({
                bg: 'nyanza.200',
                h: 0.4,
                w: '50vw',
              })}
            />
          );
        })}
      </div>
    </main>
  );
}
