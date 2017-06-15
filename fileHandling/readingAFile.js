var fs = require('fs');

fs.readFile('TestFiles/input.txt',function(err,data){
    if(err){
      console.error(err);
    }
    console.log("Asyncronous read:"+data.toString());
});
