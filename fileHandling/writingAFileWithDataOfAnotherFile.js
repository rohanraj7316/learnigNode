var fs = require('fs');
var obj = {
  "name" : "rohan raj",
  "class" : "that a question"
};
fs.readFile('TestFiles/hash.js',function(err,data){
  if(err){
    console.log(err);
  }else{
    console.log('Asyncronous file:'+data);
    fs.writeFile('TestFiles/testHashfile.js','var engageto = '+JSON.stringify(obj,null,2)+'\n'+data,function(err){
        if(err){
          console.error(err);
        }
        console.log('File Written Successfully');
    });
  }
});
