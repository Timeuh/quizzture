import {socket} from '@socket';
import {useEffect, useState} from 'react';
import Image from 'next/image';

type Props = {
  gameId: string;
};

type Player = {
  picture: string;
  username: string;
  gameId: string;
};

export default function PlayerList({gameId}: Props) {
  const [players, setPlayers] = useState<[]>([]);

  useEffect(() => {
    if (socket.connected) {
      // get already connected players
      socket.emit('get_players', {gameId});

      // receive already connected players
      socket.on('receive_players', (players) => {
        setPlayers(players);
      });

      // update players list when a new player connects
      socket.on('update_players', (players) => {
        setPlayers(players);
      });
    }
  }, [gameId]);

  return (
    <section>
      <h2>Players</h2>
      <ul>
        {players?.map((player: Player, index: number) => {
          return (
            <li key={index}>
              <Image src={player.picture} alt={'profile picture'} width={50} height={50} sizes={'100vw'} />
              <span>{player.username}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
