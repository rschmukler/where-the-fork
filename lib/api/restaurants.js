module.exports = function(app) {
  app.get('/restaurants', function*() {
    this.body = {msg: "Hello world!"};
  });
};
