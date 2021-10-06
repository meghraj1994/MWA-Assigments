angular.module('myControllerApp', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'main/main.html',
      controller: 'MainController',
      //controllerAs is being used in html file
      controllerAs: 'mainCtrl',
    })
    .when('/about', {
      templateUrl: 'about/about.html',
      controller: 'AboutController',
      controllerAs: 'aboutCtrl',
    })
    .when('/quotes/', {
      templateUrl: 'quotes/quote.html',
      controller: 'QuoteController',
      controllerAs: 'quoteCtrl',
    })
    .otherwise({
      redirectTo: '/',
    });
}
