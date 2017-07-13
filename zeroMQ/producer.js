var zmq = require('zeromq'),
	sock = zmq.socket('push');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Procedure bound to port 3000');

setImmediate(function(){
	console.log('sending work');
}, 500);