'use client';

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
import {useUserContext} from '@providers/UserProvider';
import {User} from '@schemas/user/user.schema';

/**
 * Main view for the profile page
 */
export default function ProfileView() {
  // get user from context
  const userPayload: User | null | undefined = useUserContext();

  // define user to display
  const displayedUser: User = userPayload || {
    username: 'Username',
    picture: '/images/picture/logo1.png',
    password: '',
    email: '',
    games: 0,
    victories: 0,
    victories_chain: 0,
    games_chain: 0,
    victories_three: 0,
    games_three: 0,
    highest_score: 0,
  };

  // define scores to display
  const scores: ProfileScore[] = [
    {title: 'Victoires', score: displayedUser.victories},
    {title: 'Parties', score: displayedUser.games},
    {title: 'Victoires en chaîne', score: displayedUser.victories_chain},
    {title: 'Parties en chaîne', score: displayedUser.games_chain},
    {title: 'Victoires en 3 vies', score: displayedUser.victories_three},
    {title: 'Parties en 3 vies', score: displayedUser.games_three},
  ];

  return (
    <main className={vProfile_profile}>
      <section className={vProfile_container}>
        <div className={vProfile_profileContainer}>
          <Image
            src={displayedUser.picture}
            alt={'Profile picture'}
            width={50}
            height={50}
            sizes={'100vw'}
            className={vProfile_picture}
          />
          <h1 className={vProfile_username}>{displayedUser.username}</h1>
        </div>
        <ScoreDisplay title={'Plus haut score'} score={displayedUser.highest_score} isEven={true} showPoints />
        <section className={vProfile_scoreContainer}>
          {scores.map((score: ProfileScore, index: number) => {
            return <ScoreDisplay key={index} title={score.title} score={score.score} isEven={index > 1 && index < 4} />;
          })}
        </section>
      </section>
    </main>
  );
}
