(function() {
    'use strict';

    var gulp = require('gulp'),
        connect = require('gulp-connect'),
        runSequence = require('gulp-run-sequence');

    gulp.task('livereload-connect', ['minify-html'], function() {
        connect.server({
            root: './build',
            livereload: true
        });
    });

    gulp.task('livereload-html', function() {
        gulp.src('./build')
            .pipe(connect.reload());
    });

    var syncRun = function(argument) {
        runSequence(argument, function() {
            gulp.run('livereload-html');
        });
    };

    gulp.task('livereload-watch', function() {
        gulp.watch(['./src/sass/**/*.scss'], syncRun.bind(null, 'copy-css'));
        gulp.watch(['./src/js/**/*.js'], syncRun.bind(null, 'concat-js'));
        gulp.watch(['./src/images/**/*.{gif,jpg,png}'], syncRun.bind(null, 'copy-assets'));
        gulp.watch(['./src/fonts/**/*'], syncRun.bind(null, 'copy-fonts'));
        gulp.watch(['./src/content/**/*.md'], syncRun.bind(null, 'minify-html'));
        gulp.watch(['./src/templates/**/*'], syncRun.bind(null, 'minify-html'));
    });

    gulp.task('develop', ['livereload-connect', 'prepare-build', 'livereload-watch']);
})();
