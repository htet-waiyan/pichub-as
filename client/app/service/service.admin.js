(function(w){
  var pichubApp=w.pichubApp;

  var AdminService=function($http,$q){
    var newUser=true;

    this.doSignup=function(user){
      var defered=$q.defer();

      $http({
        url:"http://localhost:3000/api/signup",
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
        url:'http://localhost:3000/api/login',
        method:'POST',
        data:JSON.stringify(credential)
      }).success(function(data,status,config){
        defered.resolve(data);
      }).error(function(data,status,config){
        defered.reject(data);
      })

      return defered.promise;
    }

    this.sendKeyforCookie=function(keyID){
      var defered=$q.defer();

      $http({
        url:'http://localhost:3000/api/cookies',
        method:'GET',
        params:{key:keyID}
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
