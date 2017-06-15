var fs = require('fs');
var obj = {
  "name" : "rohan raj",
  "class" : "that a question"
};
console.log('Going to write a file');

 fs.writeFile('TestFiles/testHashfile.js','var engageto = '+JSON.stringify(obj,null,2)+"\n"+"console.log('hii',engageto);",function(err){
   if(err){
     console.error(err);
   }
   console.log('file written Successfully');

   console.log('reading the file');

   fs.readFile('TestFiles/hash.js',function(err,data){
     if(err){
       console.error(err);
     }
     console.log('Asyncronous read of a file:'+data);
   });
 });
