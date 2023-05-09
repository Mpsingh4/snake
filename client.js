// This imports `net` module for creating network connections and the constants for the IP address and port number.
const net = require('net');
const { IP, PORT, name } = require("./constants");

// This function creates a network connection to the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // sets encoding connection to `utf8`
  conn.setEncoding("utf8");

  // This sets up an event listener for the `connect` event on the connection object
  // When the connection is established, it logs a message to the console and sends the player's name to the server
  conn.on('connect', () => {
    console.log('Connection to the server established.')
    conn.write(`Name: ${name}`);
  })

  // Sets up event listener for `data` events on the connection object
  // When data is received from server, it logs it to the console
  conn.on('data', (data) => {
    console.log('Data received from server: ', data);
  });

  return conn;
};

module.exports = { connect };