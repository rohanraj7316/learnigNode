

exports.myDemoFun = async function(x){
  var a =  res(20);
  var b =  res(30);
  return x + await a + await b;
};

function res(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(x);
      resolve(x);
    }, 2000);
  });
}
exports.functionName = function () {
    return "hiiii";
};
