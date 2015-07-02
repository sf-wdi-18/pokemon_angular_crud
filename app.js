var app = angular.module('pokemonCrudApp', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .when('/z', {
      template: "{{hello}} I'm on z",
      controller: 'MainCtrl'
    })

})

app.controller('MainCtrl', function($scope){
  $scope.hello = "TESTING..."
})

