(function(w){
  var pichubApp=w.pichubApp;

  var AdminService=function($http,$q){
    var newUser=true;

    this.doSignup=function(user){
      var defered=$q.defer();

      $http({
        url:"/signup/submit",
        method:"POST",
        data:JSON.stringify(user)
      }).success(function(data,status,config){
        defered.resolve(data);
      }).error(function(data,status,config){
        defered.reject(data);
      })

      return defered.promise;
    }

    this.doLogin=function(credential){
      var defered=$q.defer();

      $http({
        url:'/login/submit',
        method:'POST',
        data:JSON.stringify(credential)
      }).success(function(data,status,config){
        defered.resolve(data);
      }).error(function(data,status,config){
        defered.reject(data);
      })

      return defered.promise;
    }
  }

  pichubApp.service('adminService',['$http','$q',AdminService]);

})(window);
