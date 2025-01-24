import {cPlayerDisplay_display, cPlayerDisplay_picture} from '@components/player_display/PlayerDisplay.styles';
import {Player, PlayerProfileBackground} from '@utils/types/game';
import Image from 'next/image';

type Props = {
  player: Player;
  background: PlayerProfileBackground;
};

/**
 * Display a player's profile picture and username
 *
 * @param {Player} player : the player to display
 */
export default function PlayerDisplay({player, background}: Props) {
  return (
    <div className={cPlayerDisplay_display(background)}>
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
