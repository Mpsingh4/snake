const net = require('net');
const { name, up, down, left, right } = require('./constants');

let connection;

// This function sets up the inputs for the player
// once connected to the server the `stdin` is to listen for key input
// When a key is pressed the `handleUserInput` function sends the player's name and move to the server

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    connection.write(`Name: ${name}`);
    connection.write(`Move: ${keyInput(key)}`);
    handleUserInput(key);
  });

  return stdin;
};

/* Function handles user input in the terminal,
If the user types (ctrl-c), it logs a message and exits the process */
const handleUserInput = function (data) {
  if (data === '\u0003') {
    console.log('Exit command called');
    process.exit();
  } else if (data === `${name}\n`) { // checks if the user has input their name
    connection.write(`New Player ${name} has joined the game.`); //was unable to test this properly.
  }
};

// This function takes in a key input from the player, moves in that direction,
// it logs a message and returns the move direction string
// If the key input is "f", it sends a message to the server and logs a message

const keyInput = (key) => {
  if (key === up) {
    console.log("Move: up");
    return up;
  } else if (key === left) {
    console.log("Move: left");
    return left;
  } else if (key === down) {
    console.log("Move: down");
    return down;
  } else if (key === right) {
    console.log("Move: right");
    return right;
  } else if (key === "f") {
    connection.write("hello");
    console.log("Messaged hello");
  }
};

module.exports = { setupInput, keyInput };