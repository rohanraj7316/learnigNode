var a = require('./exportingfunction.js');

a.myDemoFun(20).then(v=>{
  console.log(v);
});

console.log(require('./exportingfunction.js').functionName());
