var as = require('async');

function f1(a){
  return new Promise(function(res,rej){
    setTimeout(function(){
      console.log('1');
        res(a);
    }, 4000);
 });
}

function f2(a){
  return new Promise(function(res,rej){
    setTimeout(function(){
        console.log('2');
        res(a)
    }, 2000);
});
}


as.parallel([
  function(callback){
    f1(10).then(function(response){
        console.log('inside then 1');
        callback(null,response);
    }).catch(function(err){
      console.log('error',err);
    });
  },
  function(callback){
    f2(20).then(function(response){
      console.log('inside then 2');
      callback(null,response);
    }).catch(function(err){
      console.log('error',err);
    });
  }
],
// optional callback
function(err, results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log('reached inside callback');
    console.log(results);
});
