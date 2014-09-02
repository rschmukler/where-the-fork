angular.module('WhatTheFork')
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('search', {
    url: '/',
    templateUrl: '/search/search-page.html',
    controller: 'SearchCtrl as search'
  });
})
.controller('SearchCtrl', SearchCtrl);

function SearchCtrl($state, geolocation) {
  var vm = this;

  vm.locate = function() {
    geolocation.getLocation().then(function(location) {
      vm.location = location.coords.latitude + ',' + location.coords.longitude;
      vm.search();
    });
  };

  vm.search = function() {
    $state.go('results', { location: vm.location });
  };
}
