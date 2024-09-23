import Gamepad from '@components/icons/Gamepad';
import Join from '@components/icons/Join';
import {
  vLanding_buttonsContainer,
  vLanding_gamepad,
  vLanding_join,
  vLanding_joinButton,
  vLanding_landing,
  vLanding_leftLogo,
  vLanding_playButton,
  vLanding_rightLogo,
  vLanding_subtitle,
  vLanding_title,
  vLanding_titleContainer,
} from './LandingView.styles';
import Image from 'next/image';
import Lines from '@components/lines/Lines';

export default function LandingView() {
  return (
    <main className={vLanding_landing}>
      <div className={vLanding_titleContainer}>
        <Image
          src={'/images/logo.png'}
          alt={'quizz logo'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={vLanding_leftLogo}
        />
        <h1 className={vLanding_title}>QuizzTure</h1>
        <Image
          src={'/images/logo.png'}
          alt={'quizz logo'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={vLanding_rightLogo}
        />
      </div>
      <h2 className={vLanding_subtitle}>Mesurez votre culture et montrez qui est le plus fort !</h2>
      <div className={vLanding_buttonsContainer}>
        <button className={vLanding_playButton}>
          <Gamepad className={vLanding_gamepad} />
          Créer une partie
        </button>
        <button className={vLanding_joinButton}>
          <Join className={vLanding_join} />
          Rejoindre une partie
        </button>
      </div>
      <Lines direction={'left'} />
      <Lines direction={'right'} />
    </main>
  );
}