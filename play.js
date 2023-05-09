const net = require("net");

const { connect } = require("./client");
const { setupInput, keyInput } = require("./input");

console.log("Connecting ...");

const connection = connect();
const stdin = setupInput(connection);
keyInput(stdin, connection);

//this code sets up the client to connect to the server, 
//establishes a connection object, and sets up the input stream 
//for the player to send movement or messages to the server.