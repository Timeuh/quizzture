'use client';

import {socket} from '@socket';
import {GameState, Player, GameContext} from '@utils/types/game';
import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

type Props = {
  children: ReactNode;
  gameId: string;
};

// context for the game
const CurrentGameContext = createContext<GameContext | null>(null);

/**
 * Context provider for the game
 *
 * @param {ReactNode} children : the children components
 * @param {string} gameId : the id of the game
 */
export default function GameProvider({children, gameId}: Props) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isHost, setIsHost] = useState<boolean>(false);
  const [gameState, setGameState] = useState<GameState>('lobby');

  useEffect(() => {
    if (!socket.connected) return;

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

    // update current game state
    socket.on('update_gamestate', (gameState: GameState) => {
      setGameState(gameState);
    });
  }, [gameId]);

  /**
   * Change the game state on the server
   *
   * @param {GameState} gameState : the new game state
   */
  const changeGameState = (gameState: GameState) => {
    if (!socket.connected) return;

    socket.emit('change_gamestate', {gameId, gameState});
  };

  return (
    <CurrentGameContext.Provider value={{players, isHost, gameState, changeGameState, setGameState}}>
      {children}
    </CurrentGameContext.Provider>
  );
}

/**
 * Hook to use the game context
 */
export const useGameContext = (): GameContext => {
  const context = useContext(CurrentGameContext);
  if (context === null) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
