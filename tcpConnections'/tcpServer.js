var net = require('net');
var server = net.createServer(requestListener);
var requestListener = function(socket){
	socket.write('Echo Server\r\n');
	socket.pipe(socket);
};
server.listen(1337,function(){
	console.log('server started litening at 1337');
});