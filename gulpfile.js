'use strict';

var sourceCss = './src/sass/**/*.scss';
var sourceJS = './src/js/*.js';
var distCss = './dist/css';
var distJs = './dist/js';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');


gulp.task('serve', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 4647
    }));
});

gulp.task('sass', function () {
  gulp.src(sourceCss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(distCss));
});

gulp.task('scripts', function() {
  return gulp.src(sourceJS)
    .pipe(concat('all.js'))
    .pipe(gulp.dest(distJs));
});

gulp.task('minify-css', ['clean-css', 'sass'], function() {
  return gulp.src(distCss + '/*.css')
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(distCss));
});

gulp.task('minify-js', ['clean-js', 'scripts'], function() {
  return gulp.src(distJs + '/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(distJs));
});

gulp.task('clean-css', function() {
  return gulp.src('./dist/css/*.min.css')
    .pipe(clean());
});

gulp.task('clean-js', function() {
  return gulp.src('./dist/js/*.min.js')
    .pipe(clean());
});

gulp.task('sass:watch', function () {
  gulp.watch(sourceCss, ['minify-css']);
});

gulp.task('scripts:watch', function () {
  gulp.watch(sourceJS, ['minify-js']);
});

gulp.task('default',['minify-css', 'sass:watch', 'minify-js','scripts:watch']);
