import {socket} from '@socket';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import {Player} from '@utils/types/game';

type Props = {
  gameId: string;
};

export default function PlayerList({gameId}: Props) {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    if (socket.connected) {
      // get already connected players
      socket.emit('get_players', {gameId});

      // receive already connected players
      socket.on('receive_players', (players: Player[]) => {
        setPlayers(players);
      });

      // update players list when a new player connects
      socket.on('update_players', (players: Player[]) => {
        setPlayers(players);
      });
    }
  }, [gameId]);

  return (
    <section>
      {players?.map((player: Player, index: number) => {
        return (
          <div key={index}>
            <Image src={player.picture} alt={'profile picture'} width={50} height={50} sizes={'100vw'} />
            <h3>{player.username}</h3>
          </div>
        );
      })}
    </section>
  );
}
