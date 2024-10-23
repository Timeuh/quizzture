/**
 * Handle player joining a game
 *
 * @param games : list of players in games
 * @param socket : player socket
 */
export const handleDisconnection = (games, socket, io) => {
  // get user game
  const currentGame = games.find((game) => {
    let found = false;

    // look through every player in the game if it is the player that disconnected
    game.players.forEach((player) => {
      found = player.socketId === socket.id;
    });

    return found;
  });

  // get player index in game players array
  const index = currentGame.players.findIndex((player) => {
    return player.socketId === socket.id;
  });

  // remove the player from the game
  if (index !== -1) {
    currentGame.players.splice(index, 1);
  }

  // update players list for all players in the game
  currentGame.players.forEach((player) => {
    io.to(player.socketId).emit('update_players', currentGame.players);
  });

  return games;
};
