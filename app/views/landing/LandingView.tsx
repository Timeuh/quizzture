import Gamepad from '@components/icons/Gamepad';
import Join from '@components/icons/Join';
import {css} from '@styles/css';
import {hstack, vstack} from '@styles/patterns';
import Image from 'next/image';

export default function LandingView() {
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
        className={vstack({
          pt: 16,
          gap: 8,
          justifyContent: 'center',
        })}
      >
        <button
          className={hstack({
            bg: 'nyanza.200',
            borderRadius: 'sm',
            color: 'platinum.dark',
            fontSize: '2xl',
            gap: 4,
            justifyContent: 'center',
            p: 2,
            w: '20vw',
            cursor: 'pointer',
          })}
        >
          <Gamepad
            className={css({
              h: 'auto',
              w: 8,
            })}
          />
          Créer une partie
        </button>
        <button
          className={hstack({
            borderRadius: 'sm',
            border: '2px solid',
            borderColor: 'nyanza.200',
            color: 'platinum.light',
            fontSize: '2xl',
            gap: 4,
            justifyContent: 'center',
            p: 2,
            w: '20vw',
            cursor: 'pointer',
          })}
        >
          <Join
            className={css({
              h: 'auto',
              w: 6,
            })}
          />
          Rejoindre une partie
        </button>
      </div>
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
