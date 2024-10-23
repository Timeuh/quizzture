/**
 * Handle player joining a game
 *
 * @param games : list of players in games
 * @param data : player data
 * @param io : socket io server
 * @param socket : player socket
 */
export const handleGameJoin = (games, data, io, socket) => {
  // get game to join
  const currentGame = games.find((game) => {
    return game.gameId === data.gameId;
  });

  // if the game exists
  if (currentGame) {
    // add the player to the game
    currentGame.players.push({...data, socketId: socket.id});

    // update players list for all players in the game
    currentGame.players.forEach((player) => {
      io.to(player.socketId).emit('update_players', currentGame.players);
    });

    return games;
  }

  // create the game with the first player
  games.push({
    gameId: data.gameId,
    players: [{...data, socketId: socket.id}],
  });

  return games;
};
