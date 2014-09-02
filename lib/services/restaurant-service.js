angular.module('WhereTheFork')
.factory('Restaurant', function($http, $q) {
  var Restaurant = {
    locations: [],
    search: function(location) {
      var deferred = $q.defer();
      $http.get('/api/restaurants', { params: { location: location } }).then(function(resp) {
        Restaurant.locations = resp.data;
        deferred.resolve(Restaurant.locations);
      }, function(resp) {
        deferred.reject(resp.data.error);
      });
      return deferred.promise;
    }
  };

  window.Restaurant = Restaurant;

  return Restaurant;
});
