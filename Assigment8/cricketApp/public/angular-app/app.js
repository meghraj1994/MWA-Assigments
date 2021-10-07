angular.module('cricket', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/welcome.html',
    })
    .when('/teams', {
      templateUrl: 'angular-app/team-list/teams.html',
      controller: 'TeamsController',
      //controllerAs is being used in html file
      controllerAs: 'vm',
    })
    .when('/team/:teamId', {
      templateUrl: 'angular-app/one-team/one-team.html',
      controller: 'TeamController',
      controllerAs: 'vm',
    })
    .otherwise({
      redirectTo: '/',
    });
}
