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
        })
    }

    /*** post form submit for signup ***/
    this.submitLogin=function($invalid){
      //console.log($http.defaults.headers);
      ///
      $adminService.doLogin($scope.loginForm)
        .then(function(user){
          console.log("Login successful");
          return $adminService.saveSession(user._id);
        },function(err){
          console.log("Login failed");
          $scope.errMsg=err.msg;
        }).then(function(){
          $window.location.href="http://localhost:3000";
        })
    }
  }

  pichubApp.controller('AdminController',['$scope','$window','adminService',AdminController]);
})(window);
