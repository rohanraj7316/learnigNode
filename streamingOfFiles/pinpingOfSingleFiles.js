var fs = require('fs');

var readStream = fs.createReadStream('TestFiles/input.txt');
var writeStream = fs.createWriteStream('TestFiles/output.txt');

readStream.pipe(writeStream);

writeStream.on('finish',function(){
  console.log('writing of the file completed');
});
