angular.module('cricket').factory('TeamFactory', TeamFactory);

function TeamFactory($http) {
  return {
    getAllTeams: getAllTeams,
    getOneTeam: getOneTeam,
  };
  function getAllTeams() {
    return $http.get('/api/teams').then(complete).catch(failed);
  }

  function getOneTeam(teamId) {
    return $http
      .get('/api/teams/' + teamId)
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
