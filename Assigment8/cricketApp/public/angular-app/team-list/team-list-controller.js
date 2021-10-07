angular.module('cricket').controller('TeamsController', TeamsController);

function TeamsController(TeamFactory) {
  const vm = this;
  vm.title = 'Cricket App';
  TeamFactory.getAllTeams().then(function (response) {
    vm.teams = response;
  });
}
