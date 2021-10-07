angular.module('meanGames', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/welcome.html',
    })
    .when('/games', {
      templateUrl: 'angular-app/game-list/games.html',
      controller: 'GamesController',
      //controllerAs is being used in html file
      controllerAs: 'vm',
    })
    .when('/game/:gameId', {
      templateUrl: 'angular-app/one-game/one-game.html',
      controller: 'GameController',
      controllerAs: 'vm',
    })
    .otherwise({
      redirectTo: '/',
    });
}
