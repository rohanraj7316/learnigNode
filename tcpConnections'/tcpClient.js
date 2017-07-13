var net = require('net');
var client = new net.Socket();

client.connect(1337,function(){
	console.log('Connected');
	client.write('Hello Server I love you');
});

client.on('data',function(){
	console.log('Recevied: '+data);
});

client.on('close',function(){
	console.log('Connection Closed');
});