var fs = require('fs');

console.log("Going to write into existing file");
fs.writeFile('TestFiles/input.txt',"simple learnig is good for health!!",function(err){
    if(err){
      console.error(err);
    }
    console.log("Data Writen Successfully!!");
    console.log("Let's read new File");
    fs.readFile('TestFiles/input.txt',function(err,data){
      console.log('Asyncronous read:'+data.toString());
    });
});
