'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

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

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default',['sass', 'sass:watch']);
