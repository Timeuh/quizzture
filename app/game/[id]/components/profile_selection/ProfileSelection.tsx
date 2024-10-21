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
import {FormEvent} from 'react';

/**
 * User profile selection
 */
export default function ProfileSelection() {
  // get the user from the context
  const user: User | null | undefined = useUserContext();

  /**
   * Handle user participation
   *
   * @param {FormEvent<HTMLFormElement>} event : the form submission event
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // prevent default behavior
    event.preventDefault();

    // get form data
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);

    const username = formData.get('username') as string;
    const picture = formData.get('picture') as string;

    console.log(username, picture);
  };

  return (
    <form className={cProfileSelection_container} onSubmit={handleSubmit}>
      <Image
        src={user ? user.picture : '/images/picture/logo1.png'}
        alt={'profile picture'}
        width={50}
        height={50}
        sizes={'100vw'}
        className={cProfileSelection_image}
      />
      <input
        name='username'
        type='text'
        placeholder='Pseudo'
        defaultValue={user ? user.username : ''}
        className={cProfileSelection_input}
      />
      <input name='picture' type='text' value={user ? user.picture : '/images/picture/logo1.png'} readOnly hidden />
      <button type='submit' className={cProfileSelection_button}>
        Rejoindre
      </button>
    </form>
  );
}
