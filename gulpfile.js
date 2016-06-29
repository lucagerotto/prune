var gulp = require('gulp');
var karmaServer = require('karma').Server;
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('meta', function () {
  return gulp
    .src('bower_components/jquery/jquery.js,bower_components/angular/angular.js,bower_components/angular-route/angular-route.js,bower_components/angular-sanitize/angular-sanitize.js,bower_components/angular-mocks/angular-mocks.js,bower_components/restangular/dist/restangular.js,bower_components/pouchdb/dist/pouchdb.js,bower_components/angular-pouchdb/angular-pouchdb.js,test/**/*Spec.js')
    .pipe(gulp.dest('jsFilesForTesting'))
  ;
});

gulp.task('test', function (done) {
  karmaServer.start(
{
  "configFile": __dirname + "/karma.conf.js",
  "files": [
        'bower_components/jquery/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/restangular/dist/restangular.js',
        'bower_components/pouchdb/dist/pouchdb.js',
        'bower_components/angular-pouchdb/angular-pouchdb.js',
        'test/**/*Spec.js',
		'source/**/*.js'
      ]
}
  , done);
});


gulp.task('jshint', function () {
  return gulp
    .src('source/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
  ;
});

gulp.task('concat', function () {
  return gulp
    .src('source/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
  ;
});

gulp.task('uglify', function () {
  return gulp
    .src('undefined')
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'))
  ;
});


gulp.task('build', ["jshint","karma:development","concat","karma:dist","uglify","karma:minified"]);

