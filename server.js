const { createServer } = require('http');
const { Server } = require('socket.io');
const next = require('next');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => handle(req, res));
  const io = new Server(server);

  const votes = { approve: 0, reject: 0 };

  io.on('connection', (socket) => {
    console.log('New connection:', socket.id);

    socket.emit('voteUpdate', votes);

    socket.on('vote', (data) => {
      if (data === 'approve') votes.approve++;
      if (data === 'reject') votes.reject++;
      io.emit('voteUpdate', votes); // Broadcast the update
    });

    socket.on('disconnect', () => console.log('User disconnected:', socket.id));
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
