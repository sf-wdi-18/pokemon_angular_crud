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

app.controller('PokemonShowCtrl',function($scope, $routeParams, PokemonService){
  var id = $routeParams.id;

  PokemonService.get(id).then(
    function(response){
      $scope.hello = response.name;
    },
    function(rejection){}
  );

})

app.factory('PokemonService', function($http, $q, UserService){

  var endpoint = "https://pokemon-api.herokuapp.com/pokemons/"
  var PokemonService = {};

  PokemonService.get = function(id){
    var deferred = $q.defer()

    $http
        .get(endpoint + id, {params: { api_key: UserService.current_user().api_key }})
        .success(function(response){
            deferred.resolve(response);
        })
        .error(function(rejection) {
            deferred.reject(rejection);
        });

    return deferred.promise;

  }

  return PokemonService;

})

app.controller('MainCtrl', function($scope, $routeParams){
  $scope.hello = $routeParams.id;
})
