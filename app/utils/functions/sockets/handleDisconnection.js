/**
 * Handle player joining a game
 *
 * @param games : list of players in games
 * @param socket : player socket
 */
export const handleDisconnection = (games, socket, io) => {
  // get user game
  const currentGame = games.find((game) => {
    // check if the player is in the game
    return game.players.some((player) => {
      return player.socketId === socket.id;
    });
  });

  // if there is no current game
  if (!currentGame) {
    return games;
  }

  // get player index in game players array
  const index = currentGame.players.findIndex((player) => {
    return player.socketId === socket.id;
  });

  // get current player
  const player = currentGame.players[index];

  // remove the player from the game
  if (index !== -1) {
    currentGame.players.splice(index, 1);
  }

  // change host if the host disconnected
  if (player.isHost) {
    currentGame.players[0].isHost = true;
  }

  // update players list for all players in the game
  currentGame.players.forEach((player) => {
    io.to(player.socketId).emit('update_players', currentGame.players);
  });

  return games;
};
