(function() {
    'use strict';

    var gulp = require('gulp');

    gulp.task('help', function() {
        console.log('Tasks available:\n');
        console.log('* build\n');
        console.log('* develop\n');
        console.log('* server\n');
    });
})();