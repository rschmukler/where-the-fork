angular.module('WhatTheFork')
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('search', {
    url: '/',
    templateUrl: '/search/search-page.html',
    controller: 'SearchCtrl'
  });
})
.controller('SearchCtrl', function($scope) {
});
