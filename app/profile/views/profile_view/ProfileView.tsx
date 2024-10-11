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
import {UserPayload} from '@utils/types/api';
import {useEffect, useState} from 'react';

/**
 * Main view for the profile page
 */
export default function ProfileView() {
  const [displayedUser, setDisplayedUser] = useState<User>({
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
  });
  const [scores, setScores] = useState<ProfileScore[]>([
    {title: 'Victoires', score: 0},
    {title: 'Parties', score: 0},
    {title: 'Victoires en chaîne', score: 0},
    {title: 'Parties en chaîne', score: 0},
    {title: 'Victoires en 3 vies', score: 0},
    {title: 'Parties en 3 vies', score: 0},
  ]);

  // get user from context
  const userPayload: UserPayload | null = useUserContext();

  // watch for user data
  useEffect(() => {
    if (userPayload) {
      const actualUser: User = userPayload.payload;

      setDisplayedUser(actualUser);
      setScores([
        {title: 'Victoires', score: actualUser.victories},
        {title: 'Parties', score: actualUser.games},
        {title: 'Victoires en chaîne', score: actualUser.victories_chain},
        {title: 'Parties en chaîne', score: actualUser.games_chain},
        {title: 'Victoires en 3 vies', score: actualUser.victories_three},
        {title: 'Parties en 3 vies', score: actualUser.games_three},
      ]);
    }
  }, [userPayload, displayedUser]);

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
