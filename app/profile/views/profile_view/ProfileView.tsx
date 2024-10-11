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
import {ProfileScore} from '@utils/types/profile';

/**
 * Main view for the profile page
 */
export default function ProfileView() {
  // scores to display
  const scores: ProfileScore[] = [
    {title: 'Victoires', score: 0},
    {title: 'Parties', score: 0},
    {title: 'Victoires en chaîne', score: 0},
    {title: 'Parties en chaîne', score: 0},
    {title: 'Victoires en 3 vies', score: 0},
    {title: 'Parties en 3 vies', score: 0},
  ];

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
          {scores.map((score: ProfileScore, index: number) => {
            return <ScoreDisplay key={index} title={score.title} score={score.score} isEven={index > 1 && index < 4} />;
          })}
        </section>
      </section>
    </main>
  );
}
