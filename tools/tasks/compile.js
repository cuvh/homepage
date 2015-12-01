(function () {
    'use strict';

    var gulp = require('gulp'),
        Promise = require('bluebird'),
        compilePages = require('../lib/compile-pages'),
        removeDir = require('../lib/remove-dir');

    var markdown = require('gulp-markdown-to-json');

    gulp.task('compile', ['copy-assets'], function(done) {
        var compilePromises = [];

        // pages
        compilePromises.push(new Promise(function(resolve, reject) {
            compilePages.run('.', resolve, reject);
        }));

        Promise.all(compilePromises)
            .then(function () {
                removeDir('./build/content');
                done();
            }, function () {
                // call done even if there are errors
                done();
            });
    });

})();
