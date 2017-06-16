

var f1 = function(a){
  return new Promise(function(res,rej){
    console.log('f1 resolved',a);
    res('f1 solved ');
  });
};

var f2 = function(a){
  return new Promise(function(res,rej){
    console.log("f2 is resolved",a);
    rej('f2 solved');
  });
};

var f3 = function(a){
  return new Promise(function(res,rej){
    console.log("f3 is resolved",a);
    rej('f3 solved');
  });
};

Promise.all([f1(1),f3(2),f2(3)]).then(function(response){
  console.log('promise solved',response);
}).catch(function(error){
  console.log(`promise not solved ${error}`);
});
