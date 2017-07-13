var cluster = require('cluster');

if(cluster.isMaster){
/*
* code to run if we are in master thread.
*/
//count the machine cpus
var cpuCount = require('os').cpus().length;

//creating a worker for each cpu
for (var i=0; i<cpuCount; i+=1)
	cluster.fork();
}else{
/*
* code to run if we are in worker thread.
*/

var express = require('express');
var app = express();
app.get('/',function(req,res){
	console.log('Worker %d running!',cluster.worker.id);
	res.send('Hello World: '+cluster.worker.id);
});

app.listen(3000,function(){
	console.log('server is up and running at port 3000');
});

}

cluster.on('exit',function(worker){
	// replace the dead worker
	console.log('Worker %d has been died just now :(',worker.id);
	cluster.fork();
});