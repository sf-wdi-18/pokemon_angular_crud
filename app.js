var app = angular.module('pokemonCrudApp', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .when('/pokemon/:id', {
      template: '{{hello}}',
      controller: 'PokemonShowCtrl'
    })

})

app.controller('PokemonShowCtrl', function($scope, $routeParams, $http){
  var id = $routeParams.id;
  var endpoint = "https://pokemon-api.herokuapp.com/pokemons/"

  $http
      .get(endpoint + id, {params: { api_key: "WDI18RULES" }})
      .success(function(response){
          $scope.hello = response.name;
      })
      .error(function(rejection) {
          $scope.hello = "ERROR";
      });

})

app.controller('MainCtrl', function($scope, $routeParams){
  $scope.hello = $routeParams.id;
})
