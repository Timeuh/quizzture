import ScoreDisplay from '../../components/score_display/ScoreDisplay';
import Image from 'next/image';
import {
  vProfile_container,
  vProfile_picture,
  vProfile_profile,
  vProfile_profileContainer,
  vProfile_scoreContainer,
  vProfile_username,
} from './ProfileView.styles';

/**
 * Main view for the profile page
 */
export default function ProfileView() {
  return (
    <main className={vProfile_profile}>
      <section className={vProfile_container}>
        <div className={vProfile_profileContainer}>
          <Image
            src={'/images/picture/logo1.png'}
            alt={'Profile picture'}
            width={50}
            height={50}
            sizes={'100vw'}
            className={vProfile_picture}
          />
          <h1 className={vProfile_username}>Username</h1>
        </div>
        <ScoreDisplay title={'Plus haut score'} score={0} isEven={true} showPoints />
        <section className={vProfile_scoreContainer}>
          <ScoreDisplay title={'Victoires'} score={0} isEven={false} />
          <ScoreDisplay title={'Parties'} score={0} isEven={false} />
          <ScoreDisplay title={'Victoires en chaîne'} score={0} isEven={true} />
          <ScoreDisplay title={'Parties en chaîne'} score={0} isEven={true} />
          <ScoreDisplay title={'Victoires en 3 vies'} score={0} isEven={false} />
          <ScoreDisplay title={'Parties en 3 vies'} score={0} isEven={false} />
        </section>
      </section>
    </main>
  );
}
