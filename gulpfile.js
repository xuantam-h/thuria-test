const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/css'));
}

function buildJs() {
    return gulp.src('assets/js/script.js')
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
}

function watch() {
    gulp.watch('assets/scss/**/*.scss', styles);
    gulp.watch('assets/js/script.js', buildJs);
}

exports.styles = styles;
exports.watch = watch;
exports.buildJs = buildJs;