(function () {
    'use strict';

    var gulp = require('gulp'),
        minifyHTML = require('gulp-minify-html');

    gulp.task('minify-html', ['uncss'], function() {
        return gulp.src('./build/**/*.html')
            .pipe(minifyHTML({
                comments: true,
                spare: true,
                empty: true,
                quotes: true,
                conditionals: true
            }))
            .pipe(gulp.dest('./build'));
    });

})();
