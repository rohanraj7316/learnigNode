var fs = require('fs');

var data = '';

var readStream = fs.createReadStream('TestFiles/data.json');
var writeStream = fs.createWriteStream('TestFiles/input.tex')
readStream.setEncoding('UTF8');

readStream.on('data',function(chunk){
  data += chunk;
});

readStream.on('end',function(){
  console.log(data);
    writeStream.write(data,'UTF8');
    writeStream.end();
});


readStream.on('error',function(err){
  console.log(err.stack);
});

writeStream.on('error',function(err){
  console.log(err.stack);
});

writeStream.on('finish',function(){
  console.log('writing completed');
});
