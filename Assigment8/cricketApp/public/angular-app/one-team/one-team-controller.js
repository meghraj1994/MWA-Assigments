angular.module('cricket').controller('TeamController', TeamController);
function TeamController(TeamFactory, $routeParams) {
  const vm = this;
  const teamId = $routeParams.teamId;
  TeamFactory.getOneTeam(teamId).then(function (response) {
    vm.team = response;
  });
}
