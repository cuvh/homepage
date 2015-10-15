(function() {
    'use strict';

    var gulp = require('gulp');
    var RevAll = require('gulp-rev-all');
    var runSequence = require('gulp-run-sequence');

    gulp.task('rev', function() {
        var revAll = new RevAll({
            dontRenameFile: ['.html']
        });
        gulp.src('./build/**/*')
            .pipe(revAll.revision())
            .pipe(gulp.dest('./cdn'));
    });

    gulp.task('prepare-build', ['copy-assets', 'copy-fonts', 'copy-css', 'concat-js', 'minify-html']);

    gulp.task('build', function(cb) {
        runSequence('clobber', 'removeCdn', 'prepare-build', 'rev', cb)
    });
})();