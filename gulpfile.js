const projectName= 'psychodrama',
    assetsDev = './assets/',
    assetsProduction = './assets/scss/';

const { src, dest, watch, series } = require('gulp');

const del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');
    // concat = require('gulp-concat');

const browserSync = require("browser-sync").create();

// Copy node modules to target
function modules(done) {
    // keep
    done();
}

// Watch
function watchFiles() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch('assets/scss/**/*.scss', css);
}

// Compile sass to css

function css(done) {
    src(['assets/scss/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin({keepBreaks: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(dest('./assets/css'))
        .pipe(browserSync.stream());
        done()
}

// CSS export: compact
function cssbuild(done) {
    src([assetsDev + 'css/*.css', '!'+ assetsDev + 'css/*.min.css'])
        .pipe(cssmin({keepBreaks: true}))
        .pipe(autoprefixer())
        .pipe(dest(assetsProduction + 'css'));
    done();
}

// CSS export: compressed
function cssminTask(done) {
    src(assetsProduction)
        .pipe(cssmin({keepBreaks: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(assetsDev + 'css'));
    done();
}

// Remove unnecessary files
function clean() {
    return del([assetsProduction + 'css/skeleton.css',
        assetsProduction + 'css/owl.carousel.css',
        assetsProduction + 'css/ion.rangeSlider.css'
    ]);
}

// Watch & reload
exports.build = series(css, cssbuild); // cssminTask, clean keep
exports.default = series(css, watchFiles);
// exports.modules = modules;
exports.css = css;
exports.cssbuild = cssbuild;
exports.cssmin = cssminTask;
// exports.clean = clean;
