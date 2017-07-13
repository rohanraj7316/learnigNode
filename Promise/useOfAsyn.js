

async function f1() {
  setTimeout(function(){
    console.log('f1 implemented');
    return Promise.resolve("f1 is resolved");
  },3000);
}

async function f2(){
  setTimeout(function(){
    return "issue resolved";
  },4000)
}


Promise.all([f1(),f2()]).then(function(resolved){
  console.log('promise resolved');
}).then(()=>{
  console.log("second then");
}).catch(function(error){
  console.log("inside catch");
});
