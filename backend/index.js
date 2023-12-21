// server.js
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const {router}=require('./router/myrouter')
app.use(express.static('frontend'));
app.use(router)
var names={}
var ids={}

io.on('connection', (socket) => {
   
    socket.on('user connected', (name) => {
        console.log('message: ' + name+" "+socket.id);
        io.emit('user connected',name)
        names[socket.id]=name
        ids[name]=socket.id
        
   });
   socket.on('chat message', (msg) => { 
    console.log(msg)
    console.log("by:",  socket.id)
    let from=names[socket.id];
    
    let to=ids[msg.to]
    if(from==='A')       
    {
        io.to(ids['B']).emit("chat message",{ 
            name: names[socket.id], message: msg })
    }
    else if(from==='B')       
    {
        io.to(ids['C']).emit("chat message",{ 
            name: names[socket.id], message: msg })
    }
    else{
        io.to(ids['A']).emit("chat message",{ 
            name: names[socket.id], message: msg })
    }
   
    
   });
   socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

 
    // Handle disconnection



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on *:${PORT}`);
});

