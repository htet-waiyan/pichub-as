'use strict'
var adminHandler=require('./controller/controller.admin.js');
var bizErrorHandler=require('./controller/controller.bizerror.js');

module.exports=function(app){
  app.use(function(req,res,next){
    if(req.session && req.session.isAuthenticated)
      return res.status(302).redirect('http://localhost:3000');

    return next();
  })

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
        res.set("Access-Control-Allow-Origin","http://localhost:2000");
        res.sendFile('templates/landing/login.html',app.get('routePath'));
      });

  app.route('/landing/signup')
      .get(function(req,res,next){
        res.status(200);
        res.sendFile('templates/landing/signup.html',app.get('routePath'));
      })

  app.route('/session/save')
      .get(function(req,res,next){
        /*req.session.isAuthenticated=true;
        req.session.usrId=req.query.id;*/

        res.status(200).end();
      })


  /*** post methods ***/
  app.route('/login/submit')
      .post(adminHandler.handleLogin);

  app.route('/signup/submit')
      .post(adminHandler.handleSignUp,bizErrorHandler.handleSignupBizError);

  /*** Internal Error Handler ***/
  app.use(function(err,req,res,next){
      console.log("Internal Server Error");
      console.log(err.stack);
      res.status(500);
      res.end(JSON.stringify({msg:"Internal Server Error"}));
  })
}
