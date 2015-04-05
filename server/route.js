'use strict'

module.exports=function(app){
  app.route('/')
      .get(function(req,res,next){
        console.log("Getting index file");
        res.sendFile('index.html',app.get('routePath'));
      })

  app.route('/landing')
      .get(function(req,res,next){
        console.log("Getting Landing Page");
        res.status(200);
        res.sendFile('templates/landing/landing.html',app.get('routePath'));
      });

  app.route('/landing/login')
      .get(function(req,res,next){
        res.status(200);
        res.sendFile('templates/landing/login.html',app.get('routePath'));
      })
}
