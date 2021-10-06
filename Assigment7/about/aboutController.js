angular
  .module('myControllerApp')
  .controller('AboutController', AboutController);

function AboutController() {
  const vm = this;
  vm.about = 'Pirates of the Caribbean';
}
