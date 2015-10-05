'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');


gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('serve', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 4647
    }));
});

gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('scripts:watch', function () {
  gulp.watch('./src/js/*.js', ['scripts']);
});

gulp.task('default',['sass', 'sass:watch', 'scripts','scripts:watch']);
