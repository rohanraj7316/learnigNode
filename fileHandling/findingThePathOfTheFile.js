var fs = require('fs');

console.log('Going to get file info!!');
fs.stat('TestFiles/input.txt',function(err,stats){
  if(err){
    console.error(err);
  }
  console.log(stats);
  // console.log();
});
