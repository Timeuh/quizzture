import {createServer} from 'node:http';
import next from 'next';
import {Server} from 'socket.io';
import {handleGameJoin} from './app/utils/functions/sockets/handleGameJoin.js';
import {handleDisconnection} from './app/utils/functions/sockets/handleDisconnection.js';
import {handlePlayerListRequest} from './app/utils/functions/sockets/handlePlayerListRequest.js';
import {handleGameconfChange} from './app/utils/functions/sockets/handleGameconfChange.js';

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
  let games = [];

  // when a user connects
  io.on('connection', (socket) => {
    // when the user joins a game
    socket.on('user_connected', (data) => {
      games = handleGameJoin(games, data, io, socket);
    });

    // when the user requests to get all players in the game
    socket.on('get_players', (data) => {
      handlePlayerListRequest(games, data, socket);
    });

    // when the game configuration changes
    socket.on('send_gameconf', (data) => {
      games = handleGameconfChange(games, data, io, socket);
    });

    // when the user leaves the game
    socket.on('disconnect', () => {
      games = handleDisconnection(games, socket, io);
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
