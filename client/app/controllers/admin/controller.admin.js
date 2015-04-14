(function(w){
  var pichubApp=w.pichubApp;

  var AdminController=function($scope,$window,$adminService){
    $scope.loginForm={};
    $scope.signupForm={};

    /*** post form submit for login ***/
    this.submitSignup=function($invalid){
      console.log($invalid);
      if($invalid)
        return;
      $adminService.doSignup($scope.signupForm)
        .then(function(resp){
          //do something with user
          $scope.successMsg=resp.msg;
        },function(err){
          //do something with error
          $scope.errMsg=err.msg;
          $window.location.href="http://localhost:3000"
        })
    }

    /*** post form submit for signup ***/
    this.submitLogin=function($invalid){
      $adminService.doLogin($scope.loginForm)
        .then(function(user){
          console.log("Login Successsful");
          $window.location.href="http://localhost:3000"
          console.log(user);
        },function(err){
          console.log("Login failed");
          $scope.errMsg=err.msg;
        })
    }
  }

  pichubApp.controller('AdminController',['$scope','$window','adminService',AdminController]);
})(window);
