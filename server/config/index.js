var path=require('path');
var bodyParser=require('body-parser');
var express=require('express');
var handlebars=require('express-handlebars');
var cookieParser=require('cookie-parser');
var session=require('express-session');

module.exports=function(app){
  var rootPath=path.normalize(__dirname+'/../..');
  var routePath=path.join(rootPath,'/client/view');

  console.log(rootPath);
  console.log(routePath);
  app.set('appRoot',rootPath);
  app.set('routePath',{root:routePath});

  app.use(cookieParser());
  app.use(session({
    secret:'pichub_secret',
    name:"jssession_pichub-as",
    resave:true,
    saveUninitialized:false,
    cookie:{
      path:'/',
      secure:false
    }
  }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.use(express.static(path.join(rootPath,'/bower_components')));
  app.use(express.static(path.join(rootPath,'/client')));
}
