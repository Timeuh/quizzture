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
import {socket} from '@socket';
import AvatarSelection from '../avatar_selection/AvatarSelection';

type Props = {
  gameId: string;
  togglePLayerList: () => void;
};

/**
 * User profile selection
 *
 * @param {string} gameId : current game unique id
 */
export default function ProfileSelection({gameId, togglePLayerList}: Props) {
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

    // connect player to game socket
    if (socket.connected) {
      socket.emit('user_connected', {username, picture, gameId});
    }

    // toggle next game state
    togglePLayerList();
  };

  return (
    <form className={cProfileSelection_container} onSubmit={handleSubmit}>
      {user ? (
        <>
          <Image
            src={user.picture}
            alt={'profile picture'}
            width={50}
            height={50}
            sizes={'100vw'}
            className={cProfileSelection_image}
          />
          <input name='picture' type='text' value={user.picture} readOnly hidden />
        </>
      ) : (
        <AvatarSelection />
      )}
      <input
        name='username'
        type='text'
        placeholder='Pseudo'
        defaultValue={user ? user.username : ''}
        className={cProfileSelection_input}
      />
      <button type='submit' className={cProfileSelection_button}>
        Rejoindre
      </button>
    </form>
  );
}
