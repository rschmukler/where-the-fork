var koa = require('koa'),
    mount = require('koa-mount'),
    Router = require('koa-router'),
    serveStatic = require('koa-static');

var app = module.exports = koa();

if(process.env.NODE_ENV != 'production') {
  app.use(serveStatic('public/'));
}


// Let the APIs configure themselves
var apis = ['restaurants'],
    endpoint = new Router();

apis.forEach(function(api) {
  require('./lib/api/' + api)(endpoint);
});

app.use(mount('/api', endpoint.middleware()));

console.log("Launching application on port 3000");
app.listen(3000);
