(function () {
    'use strict';

    var gulp = require('gulp');
	var image = require('gulp-image');

    gulp.task('image-copy', function () {
        return gulp.src('./src/images/**/*.{png,jpg,jpeg,gif,svg}')
       		//.pipe(image())
            .pipe(gulp.dest('./build/images'));
    });

    gulp.task('image-min', function () {
        return gulp.src('./src/images/**/*.{png,jpg,jpeg,gif,svg}')
       		.pipe(image())
            .pipe(gulp.dest('./build/images'));
    });
})();
