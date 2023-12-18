// server.js
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const {router}=require('./router/myrouter')
app.use(express.static('frontend'));
//app.use(router)
var names={}
io.on('connection', (socket) => {
    console.log('A user connected');
    /*socket.on('user connected', (name) => {
        console.log('message: ' + name+socket.id);
         names[socket.id]=name
       // console.log(names[socket.id])
    });*/
    /*socket.on('chat message', (msg) => { 
        io.emit('chat message', { name: names[socket.id], message: msg });
    });
    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });*/
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on *:${PORT}`);
});

