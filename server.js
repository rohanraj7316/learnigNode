/**
 * Created by unio-raj on 24/5/17.
 */




var express = require('express');
var app = express();
var request = require('request');
var geoip = require('geoip-lite');
var ip = "103.70.129.146";
var fs = require('fs');
var path = require('path');
var mysql = require('mysql');

app.get('/',function (req,res) {
    console.log(req.ip);
    thisIsReturningPromise().then(function (data) {
        console.log(data);
    }).catch(function (data) {
        console.log(data);
    });
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"password"
});

con.connect(function(err){})

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

app.get('/index',function(req,res){
    res.sendFile(path.join(__dirname, "fileHandling/TestFiles/index.html"));
});
app.get('/renderFile.js',function(req,res){
  fs.readFile('fileHandling/TestFiles/hash.js',function(err,data){
    if(err){
      res.status(400).json({
        message : "failed"
      });
    }
    res.send(`var config = { messaging : '12344' }; \n ${data}`);
  });
});
app.listen(8080,function(){
    console.log('server is listening to 8080 port');
});
