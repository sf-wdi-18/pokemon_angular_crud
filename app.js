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

app.factory('UserService', function(){

  var UserService = {};

  UserService.current_user = function(){
    return {
      api_key: "WDI18RULES"
    };
  }

  return UserService;

})

app.controller('PokemonShowCtrl',function($scope, $routeParams, $http, UserService){
  var id = $routeParams.id;
  var endpoint = "https://pokemon-api.herokuapp.com/pokemons/"

  $http
      .get(endpoint + id, {params: { api_key: UserService.current_user().api_key }})
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
