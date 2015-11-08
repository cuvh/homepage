(function () {
    'use strict';

    var gulp = require('gulp');

    gulp.task('copy-fonts', function() {
        return gulp.src(['src/fonts/**/*'])
            .pipe(gulp.dest('./build/fonts'));
    });

    gulp.task('copy-assets', function() {
        return gulp.src(['./src/favicon.ico'])
            .pipe(gulp.dest('./build'));
    });
})();
