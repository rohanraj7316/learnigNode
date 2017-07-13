var fs = require('fs');
var zlib = require('zlib');

var readStream1 = fs.createReadStream('TestFiles/input.txt');
var readStream2 = fs.createReadStream('TestFiles/data.json');
var writeStream = fs.createWriteStream('TestFiles/output.txt');

readStream1.pipe(writeStream);

writeStream.on('finish',function(){
  console.log('writing of the file completed');
});
