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
    var autoprefixer = require('gulp-autoprefixer');
    var imagemin = require('gulp-imagemin');
    var pngquant = require('imagemin-pngquant');
    var imageminJpegtran = require('imagemin-jpegtran');
    var htmlmin = require('gulp-htmlmin');

    gulp.task('html', function() {
        return gulp.src('src/templates/pages/**/*.hbs')
            .pipe(hb()
                .data('src/config/links.json')
                .partials('src/templates/partials/**/*.hbs')
                .helpers(hbLayouts)
            )
            .pipe(htmlmin({
                collapseWhitespace: true
            }))
            .pipe(rename({
                extname: '.html'
            }))
            .pipe(gulp.dest('build'));
    });

    gulp.task('css', function() {
        return gulp.src('src/sass/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(
                sass({
                    includePaths: ['./node_modules/bootstrap-sass/assets/stylesheets'],
                    outputStyle: 'compressed'
                })
                .on('error', sass.logError)
            )
            .pipe(autoprefixer())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('build/css'));
    });

    gulp.task('assets', function() {
        return gulp.src('assets/**/*')
            .pipe(gulp.dest('build'));
    });

    gulp.task('assets-production', function() {
        return gulp.src('assets/**/*')
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{
                    removeViewBox: false
                }, {
                    cleanupIDs: false
                }],
                use: [pngquant(), imageminJpegtran()]
            }))
            .pipe(gulp.dest('build'));
    });

    gulp.task('js', function () {
        return gulp.src(['node_modules/bootstrap-sass/assets/javascripts/bootstrap/{modal,tooltip}.js', 'src/js/plugins/*.js', 'src/js/**/*.js'])
            .pipe(sourcemaps.init())
            .pipe(concat('combined.min.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('build/js'));
    });

    gulp.task('build', ['html', 'css', 'assets', 'js']);
    gulp.task('build-production', ['html', 'css', 'assets-production', 'js']);

    gulp.task('server', function() {
        connect.server({
            root: 'build',
            livereload: true
        });
    });

    gulp.task('develop', ['build', 'server'], function() {
        gulp.watch(['src/sass/**/*.scss'], ['css', 'reload']);
        gulp.watch(['src/js/**/*.js'], ['js', 'reload']);
        gulp.watch(['assets/{images,fonts}/**/*'], ['assets', 'reload']);
        gulp.watch(['src/{config,templates}/**/*'], ['html', 'reload']);
    });

    gulp.task('reload', function() {
        gulp.src('build/*.html').pipe(connect.reload());
    });

    gulp.task('production', ['build-production'], function() {
        var revAll = new RevAll({
            dontRenameFile: [/social-image.jpg/g, '.html'],
            dontUpdateReference: [/social-image.jpg/g, '.html'],
        });

        return gulp.src('build/**')
            .pipe(revAll.revision())
            .pipe(gulp.dest('cdn'));
    });
})();
