/**
 * Handle player joining a game
 *
 * @param games : list of players in games
 * @param socket : player socket
 */
export const handleDisconnection = (games, socket) => {
  // remove the player from the game
  const index = games.findIndex((game) => {
    return game.socketId === socket.id;
  });
  if (index !== -1) {
    games.splice(index, 1);
  }

  return games;
};
