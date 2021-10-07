angular.module('meanGames').factory('GameDataFactory', GameDataFactory);

function GameDataFactory($http) {
  return {
    getAllGames: getAllGames,
    getOneGame: getOneGame,
  };
  function getAllGames() {
    return $http.get('/api/games').then(complete).catch(failed);
  }

  function getOneGame(gameId) {
    return $http
      .get('/api/games/' + gameId)
      .then(complete)
      .catch(failed);
  }

  function complete(response) {
    console.log(response.data);
    return response.data;
  }
  function failed(error) {
    return error.status.statusText;
  }
}
