/*eslint-env node */
(function() {
    'use strict';

    var gulp = require('gulp');
    var hb = require('gulp-hb');
    var hbLayouts = require('handlebars-layouts');
    var sass = require('gulp-sass');
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    var rename = require('gulp-rename');
    var sourcemaps = require('gulp-sourcemaps');
    var connect = require('gulp-connect');
    var RevAll = require('gulp-rev-all');

    gulp.task('html', function () {
        gulp.src('./src/templates/pages/**/*.hbs')
            .pipe(hb()
                .data('./src/config/links.json')
                .partials('./src/templates/partials/**/*.hbs')
                .helpers(hbLayouts)
            )
            .pipe(rename({extname: '.html'}))
            .pipe(gulp.dest('./build'));
    });

    gulp.task('css', function () {
        gulp.src('./src/sass/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./build/css'));
    });

    gulp.task('assets', function () {
        gulp.src('./assets/**/*')
            .pipe(gulp.dest('./build'));
    });

    gulp.task('js', function () {
        gulp.src(['./src/js/plugins/*.js', './src/js/**/*.js'])
            .pipe(sourcemaps.init())
            .pipe(concat('combined.min.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./build/js'));
    });

    gulp.task('build', ['html', 'css', 'assets', 'js']);

    gulp.task('connect', function() {
        connect.server({
            root: './build',
            livereload: true
        });

        gulp.watch(['./src/sass/**/*.scss'], ['css', 'reload']);
        gulp.watch(['./src/js/**/*.js'], ['js', 'reload']);
        gulp.watch(['./src/{images,fonts}/**/*'], ['assets', 'reload']);
        gulp.watch(['./src/{config,templates}/**/*'], ['html', 'reload']);
    });

    gulp.task('reload', function () {
        gulp.src('./build/*.html')
            .pipe(connect.reload());
    });

    gulp.task('develop', ['build', 'connect']);

    gulp.task('production', ['build'], function () {
        var revAll = new RevAll({
            dontRenameFile: ['.html'],
            dontUpdateReference: ['.html'],
        });

        gulp.src('build/**')
            .pipe(revAll.revision())
            .pipe(gulp.dest('./cdn'));
    });
})();
