import ChevronLeft from '@components/icons/ChevronLeft';
import ChevronRight from '@components/icons/ChevronRight';
import Image from 'next/image';
import {useState} from 'react';
import {cAvatarSelection_chevron, cAvatarSelection_container, cAvatarSelection_image} from './AvatarSelection.styles';

/**
 * Anonymous user avatar selection
 */
export default function AvatarSelection() {
  const [currentAvatar, setCurrentAvatar] = useState<number>(0);

  // list of available avatars
  const avatars = [
    '/images/picture/logo1.png',
    '/images/picture/logo2.png',
    '/images/picture/logo3.png',
    '/images/picture/logo4.png',
  ];

  /**
   * Get previous avatar
   */
  const handlePrevious = () => {
    setCurrentAvatar((prev) => {
      return (prev - 1 + avatars.length) % avatars.length;
    });
  };

  /**
   * Get next avatar
   */
  const handleNext = () => {
    setCurrentAvatar((prev) => {
      return (prev + 1) % avatars.length;
    });
  };

  return (
    <div className={cAvatarSelection_container}>
      <button type='button' onClick={handlePrevious}>
        <ChevronLeft className={cAvatarSelection_chevron} />
      </button>
      <Image
        src={avatars[currentAvatar]}
        alt={'profile picture'}
        width={50}
        height={50}
        sizes={'100vw'}
        className={cAvatarSelection_image}
      />
      <button type='button' onClick={handleNext}>
        <ChevronRight className={cAvatarSelection_chevron} />
      </button>
      <input name='picture' type='text' value={avatars[currentAvatar]} readOnly hidden />
    </div>
  );
}
