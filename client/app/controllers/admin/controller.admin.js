(function(w){
  var pichubApp=w.pichubApp;

  var AdminController=function($scope,$http,$window,$adminService){
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
      //console.log($http.defaults.headers);
      ///
      $adminService.doLogin($scope.loginForm)
        .then(function(user){
          console.log("Login Successsful");
          //return $adminService.sendKeyforCookie(user._id);
        },function(err){
          console.log("Login failed");
          $scope.errMsg=err.msg;
        }).then(function(resp){
          $window.location.href="http://localhost:3000"
        })
    }
  }

  pichubApp.controller('AdminController',['$scope','$http','$window','adminService',AdminController]);
})(window);
