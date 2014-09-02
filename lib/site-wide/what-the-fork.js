angular.module('WhatTheFork', ['ui.router', 'geolocation'])
.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});
