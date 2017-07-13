

var f1 =  new Promise(function(res,rej){
    console.log('f1 resolved');
    res('f1 solved ');
  });


var f2 = new Promise(function(res,rej){
    setTimeout(function(){
      console.log('f2 resolved');
      res("f2 resolved");
    },4000);
  });


var f3 =  new Promise(function(res,rej){
    console.log("f3 is resolved");
    res('f3 solved');
  });


Promise.all([f1,f3,f2]).then(function(response){
  console.log('promise solved',response);
}).catch(function(error){
  console.log(`promise not solved ${error}`);
});
