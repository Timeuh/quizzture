/**
 * Handle player requesting players list
 *
 * @param games : list of players in games
 * @param data : player data
 * @param socket : player socket
 */
export const handlePlayerListRequest = (games, data, socket) => {
  // get user game
  const currentGame = games.find((game) => {
    return game.gameId === data.gameId;
  });

  // send all players in the game to the user
  socket.emit('receive_players', currentGame.players);
};
