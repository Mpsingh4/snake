# Snake

This is a multiplayer snake game that allows players to move using w, a, s, and d keys. The objective of the game is to grow your snake by eating food and avoiding collisions with other players.

## Setup Instructions
* Clone this repository onto your local machine.
* Install the required dependencies by running `npm install` in the project directory.
* Start the server by running `node server.js` in the project directory.
* Start the client by running `node play.js` in a separate terminal window.

## Server Code
The server code is located in `server.js.` It uses the net module to create a TCP server that listens for incoming connections. When a client connects, the server creates a new player object and assigns it a random starting position. The server then listens for data from the client, which corresponds to the player's movement direction. When a player moves, the server updates the player's position and broadcasts the updated game state to all connected clients.

## Client Code
The client code is located in `play.js.` It uses the net module to connect to the server and send movement data to the server based on user input. The client also listens for game state updates from the server and updates the game board accordingly.

## Gameplay Instructions
* Use the w, a, s, and d keys to move your snake.
* Use f key to send a message and Ctrl + C to manually end game.
* Eat the dots to grow your snake.
* The game ends when a player idles too long, collides with a wall or another player.

## Credits

This snake game was modified by [Manpreet Singh](https://github.com/Mpsingh4) for a fun project assignment by [Lighthouse Labs](https://github.com/lighthouse-labs)

This server code for this game was not written from scratch. It is a heavily modified version of the single player game Snek created by [Tania Rascia](https://github.com/taniarascia).