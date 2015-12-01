(function() {
    'use strict';

    var gulp = require('gulp'),
        connect = require('gulp-connect'),
        runSequence = require('gulp-run-sequence');

    gulp.task('livereload-connect', function() {
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
        gulp.watch(['./src/favicon.ico'], syncRun.bind(null, 'copy-assets'));
        gulp.watch(['./src/images/**/*.{gif,jpg,png}'], syncRun.bind(null, 'image-copy'));
        gulp.watch(['./src/fonts/**/*'], syncRun.bind(null, 'copy-fonts'));
        gulp.watch(['./src/config/**/*'], syncRun.bind(null, 'compile'));
        gulp.watch(['./src/templates/**/*'], syncRun.bind(null, 'compile'));
    });

    gulp.task('develop', ['livereload-connect', 'build', 'livereload-watch']);
})();
