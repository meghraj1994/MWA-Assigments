angular.module('myControllerApp').controller('MainController', MainController);

function MainController($http) {
  const vm = this;
  vm.name = 'Jack Sparrow';
  $http
    .get('https://game-of-thrones-quotes.herokuapp.com/v1/5')
    .then(function (response) {
      vm.quotes = response.data;
    });
}
