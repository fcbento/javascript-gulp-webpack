const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const gulpUglify = require('gulp-uglify');
const gulpImageMin = require('gulp-imagemin');
const gulpConcat = require('gulp-concat');

//HTML to Distribution folder
gulp.task('copyHtml', () => {
    gulp.src('app/views/*.html')
        .pipe(gulp.dest('dist'));
});

//Sass
gulp.task('sass', () => {
    gulp.src('app/views/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('dist'));
});

// Flexboxgrid to CSS
gulp.task('flexbox', () => {
    gulp.src('node_modules/flexboxgrid/css/flexboxgrid.min.css')
        .pipe(gulp.dest('dist'));
});