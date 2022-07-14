// express server
const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path');
const cors     = require('cors');

const Sockets  = require('./sockets');
const { dbConnection } = require('../database/config');


class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;

        //db
        dbConnection();

        // Http server
        this.server = http.createServer( this.app );
        
        // sockets
        this.io = socketio( this.server, { /* settings */ } );
    }

    middlewares() {
        // public directory
        // this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );

        // cors
        this.app.use( cors() );

    }

  //socket config
    configurarSockets() {
        new Sockets( this.io );
    }

    execute() {

        // init Middlewares
        this.middlewares();

        // init sockets
        this.configurarSockets();

        // init Server
        this.server.listen( this.port, () => {
            console.log('Server running at:', this.port );
        });
    }

}


module.exports = Server;