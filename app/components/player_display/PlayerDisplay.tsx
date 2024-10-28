import {cPlayerDisplay_display, cPlayerDisplay_picture} from '@components/player_display/PlayerDisplay.styles';
import {Player} from '@utils/types/game';
import Image from 'next/image';

type Props = {
  player: Player;
};

/**
 * Display a player's profile picture and username
 *
 * @param {Player} player : the player to display
 */
export default function PlayerDisplay({player}: Props) {
  return (
    <div className={cPlayerDisplay_display}>
      <Image
        src={player.picture}
        alt={'profile picture'}
        width={50}
        height={50}
        sizes={'100vw'}
        className={cPlayerDisplay_picture}
      />
      <h3>{player.username}</h3>
    </div>
  );
}
