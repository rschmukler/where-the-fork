angular.module('WhereTheFork')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('results', {
    url: '/results?location',
    templateUrl: '/results/results-page.html',
    controller: 'ResultsCtrl as results'
  });
})
.controller('ResultsCtrl', ResultsCtrl);

function ResultsCtrl(Restaurant, $stateParams) {
  var vm = this;

  vm.locations = Restaurant.locations;

  Restaurant.search($stateParams.location);
}
