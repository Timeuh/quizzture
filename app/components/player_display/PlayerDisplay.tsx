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
    <div>
      <Image src={player.picture} alt={'profile picture'} width={50} height={50} sizes={'100vw'} />
      <h3>{player.username}</h3>
    </div>
  );
}
