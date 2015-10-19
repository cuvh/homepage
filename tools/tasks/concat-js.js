(function() {
    'use strict';

    var gulp = require('gulp'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        rename = require('gulp-rename'),
        fs = require('fs');

    var jsFiles = ['./src/js/plugins/*.js', './src/js/**/*.js'];

    gulp.task('minify-js', function() {
        return gulp.src(jsFiles)
            .pipe(concat('combined.js'))
            .pipe(uglify())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('./build/js'));
    });

    gulp.task('concat-js', function() {
        return gulp.src(jsFiles)
            .pipe(concat('combined.js'))
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('./build/js'));
    });
})();