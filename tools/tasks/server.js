(function () {
    'use strict';

    var gulp = require('gulp'),
        connect = require('gulp-connect');

    gulp.task('server', ['prepareForProd'], function() {
        connect.server({
            root: 'build'
        });
    });
})();
