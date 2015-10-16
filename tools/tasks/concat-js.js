(function() {
    'use strict';

    var gulp = require('gulp'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        rename = require('gulp-rename'),
        fs = require('fs');

    gulp.task('minify-js', function() {
        var jsFiles = ['./src/js/**/*.js'];

        return gulp.src(jsFiles)
            .pipe(concat('combined.js'))
            .pipe(uglify())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('./build/js'));
    });

    gulp.task('concat-js', function() {
        var jsFiles = ['./src/js/**/*.js'];

        return gulp.src(jsFiles)
            .pipe(concat('combined.js'))
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('./build/js'));
    });
})();