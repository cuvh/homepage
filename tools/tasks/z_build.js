(function() {
    'use strict';

    var gulp = require('gulp');
    var RevAll = require('gulp-rev-all');
    var runSequence = require('gulp-run-sequence');

    gulp.task('rev', function() {
        var revAll = new RevAll({
            dontRenameFile: ['.html'],
            dontUpdateReference: ['.html']
        });
        gulp.src('./build/**/*')
            .pipe(revAll.revision())
            .pipe(gulp.dest('./cdn'));
    });

    gulp.task('build', ['clobber', 'copy-assets', 'image-copy', 'copy-fonts', 'copy-css', 'concat-js', 'compile']);

    gulp.task('prepareForProd', function(cb) {
        runSequence('clobber', 'removeCdn', ['copy-assets', 'image-min', 'copy-fonts', 'minify-css', 'minify-js', 'minify-html'], 'rev', cb)
    });
})();