import {socket} from '@socket';
import {useEffect, useState} from 'react';
import {Player} from '@utils/types/game';
import PlayerDisplay from '@components/player_display/PlayerDisplay';

type Props = {
  gameId: string;
};

/**
 * Display every player in the game
 *
 * @param {string} gameId : the id of the game
 */
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
      {players.map((player: Player, index: number) => {
        return <PlayerDisplay key={index} player={player} />;
      })}
    </section>
  );
}
