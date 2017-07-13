var fs = require('fs');

var readStream = fs.createReadStream('TestFiles/input.txt');
var writeStream = fs.createWriteStream('TestFiles/output.txt');
var obj = {
  message : "1223445"
};
console.log(typeof obj);
writeStream.write('hello world');
readStream.pipe(writeStream);

writeStream.on('finish',function(){
  console.log('writing of the file completed');
});
