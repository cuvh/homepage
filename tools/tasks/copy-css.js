(function() {
    'use strict';

    var gulp = require('gulp'),
        fs = require('fs'),
        minifyCSS = require('gulp-minify-css'),
        sass = require('gulp-sass');

    gulp.task('sass', function() {
        return gulp.src('./src/sass/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./.tmp/css'));
    });

    gulp.task('copy-css', ['sass'], function() {
        return gulp.src(['./.tmp/css/**/*.css'])
            .pipe(gulp.dest('./build/css'));
    });

    gulp.task('minify-css', ['sass'], function() {
        return gulp.src(['./.tmp/css/**/*.css'])
            .pipe(minifyCSS({
                advanced: false,
                restructuring: false,
                aggressiveMerging: false
            }))
            .pipe(gulp.dest('./build/css'));
    });
})();