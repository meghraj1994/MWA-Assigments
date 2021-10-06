angular.module('myControllerApp').factory('QuoteFactory', QuoteFactory);
function QuoteFactory($http) {
  return {
    getTenQuote: getTenQuote,
    getOneQuote: getOneQuote,
  };
}
function getTenQuote() {
  return $http
    .get('https://game-of-thrones-quotes.herokuapp.com/v1/random/10')
    .then(complete)
    .catch(failed);
}
function getOneQuote() {
  return $http
    .get('https://game-of-thrones-quotes.herokuapp.com/v1/random/10')
    .then(complete)
    .catch(failed);
}
function complete(response) {
  return response.data;
}
function failed(error) {
  return error.statusText;
}
