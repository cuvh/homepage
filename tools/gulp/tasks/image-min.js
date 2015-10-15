(function () {
    'use strict';

    var gulp = require('gulp');

    gulp.task('image-min', function () {
        return gulp.src('./src/images/**/*.{png,jpg,jpeg,gif,svg}')
            .pipe(gulp.dest('./build/images'));
    });
})();
