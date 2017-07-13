
function f1(a,callback){
  return new Promise(function(res,rej){
    setTimeout(function(){
      console.log('1');
        callback(a);
    }, 1000);
 });
}


function f2(a,callback){
  return new Promise(function(res,rej){
    setTimeout(function(){
      console.log('2');
        callback(a);
    }, 2000);
 });
}

function f3(a,callback){
  return new Promise(function(res,rej){
    setTimeout(function(){
      console.log('3');
        callback(a);
    }, 3000);
 });
}

async function finalResult(){
  
}
