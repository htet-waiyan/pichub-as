var path=require('path');
var bodyParser=require('body-parser');
var express=require('express');
var handlebars=require('express-handlebars');

module.exports=function(app){
  var rootPath=path.normalize(__dirname+'/../..');
  var routePath=path.join(rootPath,'/client/view');

  app.set('appRoot',rootPath);
  app.set('routePath',{root:routePath});

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.use(express.static(path.join(rootPath,'/bower_components')));
  app.use(express.static(path.join(rootPath,'/client')));
}
