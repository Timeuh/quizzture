'use client';

import {socket} from '@socket';
import {Player, PlayersListContext} from '@utils/types/game';
import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

type Props = {
  children: ReactNode;
  gameId: string;
};

// context for the players list
const PlayersContext = createContext<PlayersListContext | null>(null);

/**
 * Context provider for the players list of the game
 *
 * @param {ReactNode} children : the children components
 * @param {string} gameId : the id of the game
 */
export default function PlayersProvider({children, gameId}: Props) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isHost, setIsHost] = useState<boolean>(false);

  useEffect(() => {
    if (socket.connected) {
      // get already connected players
      socket.emit('get_players', {gameId});

      // receive already connected players
      socket.on('receive_players', (players: Player[]) => {
        setPlayers(players);

        // get if current player is the host
        const isHost = players.some((player: Player) => {
          return player.socketId === socket.id && player.isHost;
        });

        setIsHost(isHost);
      });

      // update players list when a new player connects
      socket.on('update_players', (players: Player[]) => {
        setPlayers(players);

        // get if current player is the host
        const isHost = players.some((player: Player) => {
          return player.socketId === socket.id && player.isHost;
        });

        setIsHost(isHost);
      });
    }
  }, [gameId]);

  return <PlayersContext.Provider value={{players, isHost}}>{children}</PlayersContext.Provider>;
}

/**
 * Hook to use the players list context
 */
export const usePlayersListContext = (): PlayersListContext => {
  const context = useContext(PlayersContext);
  if (context === null) {
    throw new Error('usePlayersListContext must be used within a PlayersProvider');
  }
  return context;
};
