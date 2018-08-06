const express = require('express');
const socket = require('socket.io');

// App setup
const app = express();
const server = app.listen(3000, () => console.log('listening on port 3000'));

// Static files
app.use(express.static('public'));

// socket setup
const io = socket(server);

io.on('connection', socket => {
  console.log('user connected', socket.id);

  socket.on('disconnect', () => console.log('user disconnected'));

  socket.on('chat', data => {
    io.sockets.emit('chat', data);
  });

})