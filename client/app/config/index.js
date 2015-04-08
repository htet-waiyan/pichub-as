(function(w){
  var pichub=w.pichubApp;

  pichub.config(function($routeProvider,$locationProvider){
    $routeProvider.when('/',{
      templateUrl:'/landing',
      controller:'HomeController',
      controllerAs:'hmCtrl'
    }).when('/login',{
      templateUrl:'/landing/login',
      controller:'AdminController',
      controllerAs:'adminCtrl'
    }).when('/signup',{
      templateUrl:'/landing/signup',
      controller:'AdminController',
      controllerAs:'adminCtrl'
    })

    //$locationProvider.html5Mode(true);
  })
})(window)
