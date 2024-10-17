import Image from 'next/image';
import {
  cProfileSelection_button,
  cProfileSelection_container,
  cProfileSelection_image,
  cProfileSelection_input,
} from './ProfileSelection.styles';

/**
 * User profile selection
 */
export default function ProfileSelection() {
  return (
    <form className={cProfileSelection_container}>
      <Image
        src={'/images/picture/logo1.png'}
        alt={'profile picture'}
        width={50}
        height={50}
        sizes={'100vw'}
        className={cProfileSelection_image}
      />
      <input type='text' placeholder='Pseudo' className={cProfileSelection_input} />
      <button type='submit' className={cProfileSelection_button}>
        Rejoindre
      </button>
    </form>
  );
}
