const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Connection to the server established.')
    conn.write('Name: MPS');
  })

  conn.on('data', (data) => {
    console.log('Data received from server: ', data);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;