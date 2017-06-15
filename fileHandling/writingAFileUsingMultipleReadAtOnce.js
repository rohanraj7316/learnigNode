var fs = require('fs');

var file1 = new Promise(function(resolve,reject){
  fs.readFile('TestFiles/hash.js',function(err,data){
    if(err){
      reject(err);
    }else{
      resolve(data);
    }
  });
});

var file2 = new Promise(function(resolve,reject){
  fs.readFile('TestFiles/input.txt',function(err,data){
    if(err){
      reject(err);
    }else{
      resolve(data);
    }
  });
});


file2.then(function(data){
  console.log(data);
}).catch(function(data){
  console.log(data);
});
