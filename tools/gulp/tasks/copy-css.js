(function () {
    'use strict';

    var gulp = require('gulp'),
        fs = require('fs'),
        minifyCSS = require('gulp-minify-css');

    gulp.task('copy-css', function() {
        var siteData = JSON.parse(fs.readFileSync("./site.json", "utf8"));
        var styleSheet = 'style.css';
        if (siteData.styleSheet) {
            styleSheet = siteData.styleSheet;
        }
        return gulp.src(['./.tmp/css/**/*.css'])
           .pipe(minifyCSS({
                advanced: false,
                restructuring: false,
                aggressiveMerging: false
            }))
            .pipe(gulp.dest('./build/css'));
    });
})();
