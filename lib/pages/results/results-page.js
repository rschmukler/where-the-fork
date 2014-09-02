angular.module('WhatTheFork')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('results', {
    url: '/results?location',
    templateUrl: '/results/results-page.html',
    controller: 'ResultsCtrl as results'
  });
})
.controller('ResultsCtrl', ResultsCtrl);

function ResultsCtrl() {
  var vm = this;
}
