var slurpee = require('slurpee');

slurpee.config.assetPaths = [
  'lib/{site-wide}/**/*',
  'lib/components/**/{images,files}/*',
  'lib/pages/**/{images,files}/*'
];

slurpee.config.jsPaths = [
  'lib/site-wide/what-the-fork.js',
  'lib/{components,pages,filters,services}/**/*.js'
];

slurpee.config.indexFile = 'lib/site-wide/layout.jade';
slurpee.config.jadePaths = [
  'lib/components/**/*.jade',
  'lib/pages/**/*.jade',
];

slurpee.config.stylGlobals = ['lib/site-wide/stylDefinitions.styl'];
slurpee.config.stylPaths = [
  'lib/site-wide/global.styl',
  'lib/components/**/*.styl',
  'lib/pages/**/*.styl',
];

slurpee.config.cssFile = 'css/app.css';
slurpee.config.jsFile = 'js/app.js';

slurpee.config.serverJadePaths = [];
slurpee.config.useBower = true;

slurpee.configure();


var gulp = require('gulp');

gulp.task('default', ['watch', 'build']);
