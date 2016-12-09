const gulp = require('gulp');
const panini = require('panini');
const plugins = require('gulp-load-plugins');
const del = require('del');
const browser = require('browser-sync');
const dotenv = require('dotenv');

dotenv.config({ silent: true });

const $ = plugins();
const isDev = process.env.NODE_ENV !== 'production';

gulp.task('build', gulp.series(clean, pages, images, fonts, sass, icons, javascript));
gulp.task('default', gulp.series('build', server, watch));
gulp.task('fontastic', function () {
    return gulp.src('package.json')
        .pipe($.fontastic({
            key: process.env.FONTASTIC_KEY,
            font_dir: 'src/asserts/icons/',
            // style_path: 'fonts/',
            scss: true,
        }));
});

// Delete the "dist" folder
// This happens every time a build starts
function clean () {
    return del(['dist/**/*']);
}

function pages () {
    return gulp.src('src/pages/**/*.html')
        .pipe(panini({
            root: 'src/',
            layouts: 'src/layouts/',
            partials: 'src/partials/',
            helpers: 'src/helpers/',
            data: 'src/data/'
        }))
        .pipe(gulp.dest('dist'));
}

// Copy and compress images
function images () {
    return gulp.src('src/assets/img/**/*')
        .pipe($.imagemin())
        .pipe(gulp.dest('./dist/img'));
}

function fonts () {
    return gulp.src('src/assets/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts'));
}
function icons () {
    return gulp.src('src/assets/icons/**/*')
        .pipe(gulp.dest('./dist/icons'));
}

function sass () {
    const sassOptions = { includePaths: [
        'bower_components/bootstrap-sass/assets/stylesheets',
        'bower_components/clippings-layout-grid/sass',
    ] };

    return gulp.src('src/assets/scss/app.scss')
        .pipe($.if(!isDev, $.sourcemaps.init()))
        .pipe($.sass(sassOptions).on('error', $.sass.logError))
        .pipe($.autoprefixer({ browsers: ['last 2 versions'] }))
        // .pipe($.if(isDev, $.uncss({ html: ['dist/**/*.html'] })))
        .pipe($.if(!isDev, $.sourcemaps.write()))
        .pipe(gulp.dest('dist/css'));
}

function javascript () {
    return gulp.src([
            'bower_components/jquery/dist/jquery.slim.js',
            'bower_components/Stickyfill/dist/stickyfill.js',
            'bower_components/bootstrap-sass/assets/javascripts/bootstrap/{transition,tooltip,popover,button,modal}.js',
            'src/assets/js/**/*',
        ])
        .pipe($.if(!isDev, $.sourcemaps.init()))
        .pipe($.concat('combined.min.js'))
        // .pipe($.uglify())
        .pipe($.if(!isDev, $.sourcemaps.write()))
        .pipe(gulp.dest('dist/js'));
}

// Start a server with LiveReload to preview the site in
function server(done) {
    browser.init({ server: 'dist' });
    done();
}

// Reset Panini's cache of layouts and partials
function resetPages(done) {
    panini.refresh();
    done();
}

// Watch for file changes
function watch() {
    gulp.watch('src/pages/**/*.html').on('all', gulp.series(pages, browser.reload));
    gulp.watch(['src/layouts/**/*', 'src/partials/**/*']).on('all', gulp.series(resetPages, pages, browser.reload));
    gulp.watch(['../scss/**/*.scss', 'src/assets/scss/**/*.scss']).on('all', gulp.series(resetPages, sass, pages, browser.reload));
    gulp.watch('src/assets/fonts/**/*').on('all', gulp.series(fonts, browser.reload));
    gulp.watch('src/assets/icons/**/*').on('all', gulp.series(icons, browser.reload));
    gulp.watch('src/assets/js/**/*').on('all', gulp.series(javascript, browser.reload));
}
