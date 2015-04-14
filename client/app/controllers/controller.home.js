(function(w){
  var pichub=w.pichubApp;

  function HomeController($scope){
  	$scope.test="hello";
  }

  pichub.controller('HomeController',['$scope',HomeController]);
})(window);
