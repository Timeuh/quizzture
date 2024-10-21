'use client';

import Image from 'next/image';
import {
  cProfileSelection_button,
  cProfileSelection_container,
  cProfileSelection_image,
  cProfileSelection_input,
} from './ProfileSelection.styles';
import {User} from '@schemas/user/user.schema';
import {useUserContext} from '@providers/UserProvider';

/**
 * User profile selection
 */
export default function ProfileSelection() {
  // get the user from the context
  const user: User | null | undefined = useUserContext();

  return (
    <form className={cProfileSelection_container}>
      <Image
        src={user ? user.picture : '/images/picture/logo1.png'}
        alt={'profile picture'}
        width={50}
        height={50}
        sizes={'100vw'}
        className={cProfileSelection_image}
      />
      <input
        type='text'
        placeholder='Pseudo'
        defaultValue={user ? user.username : ''}
        className={cProfileSelection_input}
      />
      <input type='text' value={user ? user.picture : '/images/picture/logo1.png'} readOnly hidden />
      <button type='submit' className={cProfileSelection_button}>
        Rejoindre
      </button>
    </form>
  );
}
