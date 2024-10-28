/**
 * Handle game configuration change
 *
 * @param games : list of players in games
 * @param data : player data
 * @param io : socket io server
 * @param socket : player socket
 */
export const handleGameconfChange = (games, data, io) => {
  // get game to join
  const currentGame = games.find((game) => {
    return game.gameId === data.gameId;
  });

  // if the game doesn't exist
  if (!currentGame) {
    return games;
  }

  // update the game configuration
  currentGame.config = data.config;

  // update game config for all players in the game
  currentGame.players.forEach((player) => {
    io.to(player.socketId).emit('receive_gameconf', currentGame.config);
  });

  return games;
};
