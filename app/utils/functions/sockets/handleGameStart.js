/**
 * Handle game starting process
 *
 * @param games : list of games
 * @param data : game id
 * @param io : socket io server
 */
export const  handleGameStart = async (games, data, io) => {
  // get game to join
  const currentGame = games.find((game) => {
    return game.gameId === data.gameId;
  });

  // if the game doesn't exist
  if (!currentGame) {
    return games;
  }

  // get available question categories
  const categories = currentGame.gameState.categories;
  
  // get questions from database
  const questions = await fetch('http://localhost:3000/api/draw', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({categories, quantity: 20}),
  }).then((response) => {
    return response.json();
  });
  

  // conert questions from database into game questions
  const gameQuestions = questions.map((question) => {
    return {
      question: question,
      playerAnswers: [],
    };
  });

  // put questions in the game
  currentGame.questions = gameQuestions;

  // send questions to all players
  currentGame.players.forEach((player) => {
    io.to(player.socketId).emit('receive_questions', currentGame.questions);
  });

  return games;
};
