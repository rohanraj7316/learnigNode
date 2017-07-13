var zmq = require('zeromq'),
	sock = require('pull');

sock.connect('tcp://127.0.0.1:3000');
console.log('Worker connected to port 3000');