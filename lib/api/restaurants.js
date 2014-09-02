var Search = require('grubhub-api').Search,
    thunkify = require('thunkify');

Search.prototype.run = thunkify(Search.prototype.run);


module.exports = function(app) {
  app.get('/restaurants', function*() {
    var search = new Search(this.query.location);
    this.body = yield search.run();
  });
};
