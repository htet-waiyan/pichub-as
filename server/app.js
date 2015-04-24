var app=require('express')();
var http=require('http');
var MongoClient=require('mongodb').MongoClient;
var dbConnection=require('./config/setting').DB.connection;
var PORT=require('./config/setting').app.PORT;

require('./config/')(app);
require('./route')(app);
http.createServer(app).listen(PORT,function(){
  console.log("Server started at Port "+PORT);
})
