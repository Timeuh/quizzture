/**
 * Handle player requesting players list
 *
 * @param games : list of players in games
 * @param data : player data
 * @param socket : player socket
 */
export const handlePlayerListRequest = (games, data, socket) => {
  // get all players in the game
  const gameId = data.gameId;
  const players = games.filter((game) => {
    return game.gameId === gameId;
  });

  // send all players in the game to the user
  socket.emit('receive_players', players);
};
