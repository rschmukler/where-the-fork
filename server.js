var koa = require('koa'),
    mount = require('koa-mount'),
    Router = require('koa-router'),
    serveStatic = require('koa-static'),
    readFile = require('co-fs').readFile;

var app = module.exports = koa();

app.use(Router(app));

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

app.get(/.*/, function*(next) {
  yield next;
  if(!this.body) this.body = yield readFile('public/index.html', 'utf8');
});


console.log("Launching application on port 3000");
app.listen(3000);
