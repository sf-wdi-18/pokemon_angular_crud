var app = angular.module('pokemonCrudApp', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
    .when('/', {
      template: '{{ hello }} this works!',
      controller: 'MainCtrl'
    })

})

app.controller('MainCtrl', function($scope){
  $scope.hello = "TESTING..."
})

