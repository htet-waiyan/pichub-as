'use strict'
var Admin=require('./../service/admin/');
var model=require('./../model/');
var admin=new Admin();

exports.handleLogin=function(req,res,next){
  console.log("Trace : handleLogin");
  console.log(JSON.stringify(req.body));
  admin.authenLogin(req.body.email,req.body.passwd,function(err,user){
    /*** db error. return 500 internal server error ***/
    if(err)
      return next(err);

    /*** user not found. authentication failed ***/
    if(!user){
      res.status(403);
      res.end(JSON.stringify({msg:"Email or password is incorrect."}));
    }
    /*** user found. authentication succeed. redirect to feed ***/
    else{
      res.status(200);
      res.end(JSON.stringify(user));
    }
  })
}

exports.handleSignUp=function(req,res,next){
  console.log("Trace : handleSingup");
  var user=model.initUser(req.body.username,req.body.email,req.body.passwd);
  admin.on('bizErr.signup.input',function(errMsg){
    req.inputErr=errMsg;
    return next();
  })
  admin.signUpUser(user,function(err,dbUser,dupUsername,dupEmail){
    if(err){
      return next(err);
    }

    if(dupUsername || dupEmail){
      req.dupUsername=dupUsername;req.dupEmail=dupEmail;
      return next();
    }

    res.status(200);
    res.end(JSON.stringify({msg:"Registered successfully! Please login."}));
  })
}
