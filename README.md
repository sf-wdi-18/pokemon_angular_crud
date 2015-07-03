# Pokemon: Angular Routing & CRUD

| **Objectives** |
| :---- |
| Explore Routing in Single Page Apps |
| Practice Mapping Routes to Controllers |
| Consume a RESTful API endpoint |
| Create a basic Pokemon Service that can CRUD |

###Instructions:
* Clone this repo.
* **Make sure to `bower install`.**
* We will need to run a local server once we start playing with routing.
    - In the application directory run `python -m SimpleHTTPServer`.
    - Then open your browser to "localhost:8000" (or similar).

### Meet the Location Hash
In the Chrome Console, type:
```
window.location // or just `location`
```

If you [view this readme on github](#instructions) you'll see that in addition to going to the readme page, the page automagically scrolls down to the "Instructions" heading. This happens because 1) The Instructions heading tag has an `id` of "Instructions", and 2) because the URL you visted contains a hash fragment: `#Instrutions`.

* Can you think of a way to read the hash string when the page loads?
    - E.g. when I go to, `somesinglepageapp.com/#put-me-on-the-page` I see "put-me-on-the-page" on the page?

Another interesting property of the location hash is that when it changes it doesn't trigger a page refresh.

```
location.hash = "1 did I refresh?"
location.hash = "2 What about now?"
```

When you hit the "back" button, though, you'll see that you go from "#2..." to "#1..." to the original url ("/").

What if we hijacked the hash? What if we changed something on the page based on the value in the hash? In other words, _What if we used the hash to record application state_?

###Routing
Angular provides a routing module called ngRoute which we're going to use in our application. Remember how we did routing in Node/Express? It's pretty similar.

First, you will need to bower install each individual Angular Module. In this case, `bower install angular-route`.

Second, you will need to link to your module in a script tag in your html.

**Make Sure to Run your Local Server Now!**

Finally, you can inject the module in your application:

```
var app = angular.module('pokemonCrudApp', ['ngRoute'])
```

Now we can configure our routes:

```
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      template: '<h1>{{hello}}</h1>',
      controller: 'MainCtrl'
    })
})

app.controller('MainCtrl', function($scope){
  $scope.hello = "TESTING..."
})
```


### Creating a Pokemon Service
In Rails we could ask our Model questions like, "Give me all your instances", or, "Find me the pokemon with an id of 127". We'd like to be able to do the same thing in our client, except that, instead of querying the database, we'll be hitting an API endpoint.

First we'll need to inject the `$http` module into our controller.

Then we can make a basic get request for pokemon 127. (i.e. pokemon#show)

```
var endpoint = "https://pokemon-api.herokuapp.com/pokemons/127?api_key=WDI18RULES"

$http
    .get(endpoint)
    .success(function(response){
        $scope.hello = response.name;
    })
    .error(function(rejection) {
        $scope.hello = "ERROR";
    });
```

---

# Goals
* Can you perform a basic GET operation to show an individual pokemon?
* Can you edit a resource, e.g. perform an update using a form?
* Can you create a UserService and stub out a `current_user` method, instead of hardcoding the api key in the endpoint?

---

Reading:
* [What are the different parts of a URL?](http://www.robdixoniii.com/anatomy-of-a-uri/)
* [ngRoute Module](https://docs.angularjs.org/api/ngRoute)
* [ng-view Directive](https://docs.angularjs.org/api/ngRoute/directive/ngView)

Bonus reading:
* [ngResource Module -- CRUD made easy](https://docs.angularjs.org/api/ngResource)
* [What's the difference between the `factory pattern` and the `service pattern`?](http://stackoverflow.com/a/20985702/3390061)
