(function() {
    'use strict';

    var gulp = require('gulp'),
        fs = require('fs'),
        minifyCSS = require('gulp-minify-css');

    gulp.task('copy-css', ['sass'], function() {
        return gulp.src(['./.tmp/css/**/*.css'])
            .pipe(minifyCSS({
                advanced: false,
                restructuring: false,
                aggressiveMerging: false
            }))
            .pipe(gulp.dest('./build/css'));
    });
})();