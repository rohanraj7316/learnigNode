/**
 * Created by unio-raj on 24/5/17.
 */




var express = require('express');
var app = express();
var request = require('request');
var geoip = require('geoip-lite');
var ip = "103.70.129.146";

app.get('/',function (req,res) {
    console.log(req.ip);


    thisIsReturningPromise().then(function (data) {
        console.log(data);
    }).catch(function (data) {
        console.log(data);
    });
});

function thisIsReturningPromise(){
    return new Promise(function (resolve,reject) {
        request('https://freegeoip.net/json/',function(err,response,body){
            if(err){
                reject(err);
            }else {
                resolve(response);
            }
        });
    });
}
app.listen(8080,function(){
    console.log('server is listening to 8080 port');
});
