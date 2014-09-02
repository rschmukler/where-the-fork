angular.module('WhereTheFork', ['ui.router', 'geolocation'])
.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});
