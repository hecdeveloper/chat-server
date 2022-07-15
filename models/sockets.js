class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      //Validate JWT
      //Knwow whar user is active
      //Emit  all connected users
      //socket join
      console.log("Client connected");
    });
  }
}

module.exports = Sockets;
