// make a connection
const socket = io.connect('http://localhost:3000');

// dom elements
const message = document.getElementById('message'),
      sendBtn = document.getElementById('sendBtn'),
      username = document.getElementById('username'),
      submitBtn = document.getElementById('submitBtn'),
      output = document.getElementById('output');

// Emit Events
sendBtn.addEventListener('click', () => {
  socket.emit('chat', {
    username: username.value,
    message: message.value
  });
});

socket.on('chat', data => {
  output.innerHTML += `<li><strong>${data.username}:</strong> ${data.message}</li>`
});
