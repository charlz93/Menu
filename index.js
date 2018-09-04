const path = require('path');
const express = require('express');
const app = express();

const SocketIO = require('socket.io');


// Settings
app.set('port' , process.env.PROT || 3000);

//Static files

app.use(express.static(path.join(__dirname, 'public' )));

// Start the server
const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

const io = SocketIO(server);

//WebSocket

io.on('connection' , (socket) => {
    console.log('nueva conexion', socket.id);
});