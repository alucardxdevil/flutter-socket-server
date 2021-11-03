const express = require('express');
const app = express();
const path = require('path');
const { Socket } = require('socket.io');
require('dotenv').config();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

// Public path
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Server is running on port`, process.env.PORT);
});