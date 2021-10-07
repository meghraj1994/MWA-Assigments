angular.module('meanGames').controller('GameController', GameController);
function GameController(GameDataFactory, $routeParams) {
  const vm = this;
  const gameId = $routeParams.gameId;
  GameDataFactory.getOneGame(gameId).then(function (response) {
    vm.game = response;
  });
}
