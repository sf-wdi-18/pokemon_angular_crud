var app = angular.module('pokemonCrudApp', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .when('/pokemon/:id', {
      template: '{{hello}}',
      controller: 'MainCtrl'
    })

})

app.controller('MainCtrl', function($scope, $routeParams){
  $scope.hello = $routeParams.id;
})

