var app=require('express')();
var http=require('http');
var MongoClient=require('mongodb').MongoClient;
var dbConnection=require('./config/setting').connection;
var PORT=require('./config/setting').app.PORT;

MongoClient.connect(dbConnection,{url_decode_auth:true},function(err,db){
  if(err)
    throw err;

  require('./config/')(app);
  require('./route')(app);
  http.createServer(app).listen(PORT,function(){
    console.log("Server started at Port "+PORT);
  })
})
