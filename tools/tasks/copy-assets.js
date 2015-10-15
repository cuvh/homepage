(function () {
    'use strict';

    var gulp = require('gulp');

    gulp.task('copy-fonts', function() {
        return gulp.src(['src/fonts/**/*'])
            .pipe(gulp.dest('./build/fonts'));
    });

    gulp.task('copy-assets', ['image-min'], function() {
        return gulp.src(['./src/favicon.ico', './src/*.png'])
            .pipe(gulp.dest('./build'));
    });
})();
