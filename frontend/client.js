//const socket = io();
const nameContainer = document.getElementById('name-container');
const nameInput = document.getElementById('name');
const chatContainer = document.getElementById('container');
const input = document.querySelector('#m');
const messages = document.querySelector('#messages');

function submitName(){
  const name = nameInput.value.trim();
  if (name) {
    //socket.emit('user connected', name);
    nameContainer.style.display = 'none';
    chatContainer.style.display = 'block';
  }
}
function sendMessage(){
  
  console.log("clicked")
  if (input.value) {
   //socket.emit('chat message', input.value);
    input.value = '';
  }
}


/*
  socket.on('user connected', (name) => {
    const li = document.createElement('li');
    li.textContent = `${name} has joined the chat`;
    messages.appendChild(li);
  });*/
  /*socket.on('chat message', (data) => {
    const li = document.createElement('li');
    li.textContent = `${data.name}: ${data.message}`;
    messages.appendChild(li);
  });*/

