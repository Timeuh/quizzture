import {createServer} from 'node:http';
import next from 'next';
import {Server} from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

// when using middleware `hostname` and `port` must be provided below
const app = next({dev, hostname, port: port});
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer);

  // games list
  const games = [];

  // when a user connects
  io.on('connection', (socket) => {
    // when the user joins a game
    socket.on('user_connected', (data) => {
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
    });

    // when the user requests to get all players in the game
    socket.on('get_players', (data) => {
      // get all players in the game
      const gameId = data.gameId;
      const players = games.filter((game) => {
        return game.gameId === gameId;
      });

      // send all players in the game to the user
      socket.emit('receive_players', players);
    });

    // when the user leaves the game
    socket.on('disconnect', () => {
      // remove the player from the game
      const index = games.findIndex((game) => {
        return game.socketId === socket.id;
      });
      if (index !== -1) {
        games.splice(index, 1);
      }
    });
  });

  httpServer
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
