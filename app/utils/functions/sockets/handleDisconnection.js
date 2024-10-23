/**
 * Handle player joining a game
 *
 * @param games : list of players in games
 * @param socket : player socket
 */
export const handleDisconnection = (games, socket, io) => {
  // get player index in game array
  const index = games.findIndex((game) => {
    return game.socketId === socket.id;
  });

  // get the player
  const player = games[index];

  // remove the player from the game
  if (index !== -1) {
    games.splice(index, 1);
  }

  // get all players in the same game
  const players = games.filter((game) => {
    return game.gameId === player.gameId;
  });

  // update players list for all players in the game
  players.forEach((game) => {
    io.to(game.socketId).emit('update_players', players);
  });

  return games;
};
