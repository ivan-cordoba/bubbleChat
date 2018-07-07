const express = require('express');
const morgan = require('morgan');
const path = require('path');
const socket = require('socket.io');
const http = require('http');
const xss = require('xss');

const app = express();
const httpServer = http.Server(app);
const io = socket(httpServer);

const port = process.env.PORT || 4000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket) => {
  socket.on('msg', (msg) => {
    io.emit('msg', xss(msg));
  });
});

httpServer.listen(port, () => {
  console.log(`listening on port ${port}`);
});
