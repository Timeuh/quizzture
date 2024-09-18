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

  io.on('connection', (socket) => {
    console.log('> Un utilisateur est connecté');

    socket.on('user_connected', (data) => {
      console.log(data.message);
    });

    socket.on('disconnect', () => {
      console.log('> Un utilisateur est déconnecté');
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