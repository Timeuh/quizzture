/**
 * Handle player joining a game
 *
 * @param games : list of players in games
 * @param data : player data
 * @param io : socket io server
 * @param socket : player socket
 */
export const handleGameJoin = (games, data, io, socket) => {
  // add the player to the game
  games.push({...data, socketId: socket.id});

  // get all players in the game
  const gameId = data.gameId;
  const players = games.filter((game) => {
    return game.gameId === gameId;
  });

  // update players list for all players in the game
  players.forEach((game) => {
    io.to(game.socketId).emit('update_players', players);
  });

  return games;
};
