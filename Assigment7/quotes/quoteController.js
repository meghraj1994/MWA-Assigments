angular
  .module('myControllerApp')
  .controller('QuoteController', QuoteController);
function QuoteController(QuoteFactory) {
  const vm = this;

  QuoteFactory.getTenQuote().then(function (response) {
    vm.quotes = response;
  });
}
