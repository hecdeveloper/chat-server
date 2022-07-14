const express = require('express');
const app = express();

const rooms =['room1', 'room2', 'room3', 'room4', 'room5'];
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require('./connection')

const server = require('http').createServer(app);
const PORT = 5001;
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})
   

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})