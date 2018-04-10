import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import gulpUglify from 'gulp-uglify';
import gulpImageMin from 'gulp-imagemin';
import gulpConcat from 'gulp-concat';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import webpack from 'webpack-cli';
import webpackStream from 'webpack-stream';
import webpackConfig from './webpack.config.babel';

var plumber = require("gulp-plumber");
// HTML to Distribution folder
gulp.task('copyHtml', () => {
    gulp.src('app/views/*.html')
        .pipe(gulp.dest('dist'));
});

// Convert Sass to Css
gulp.task('sass', () => {
    gulp.src('app/views/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('dist'));
});

// Flexboxgrid to Distribution folder
gulp.task('flexbox', () => {
    gulp.src('node_modules/flexboxgrid/css/flexboxgrid.min.css')
        .pipe(gulp.dest('dist'));
});

//Concat
gulp.task('scripts', () => {
    gulp.src('app/js/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

//Run
gulp.task('default', ['copyHtml', 'sass', 'flexbox', 'webpack']);

//Watch
gulp.task('watch', () => {
    gulp.watch('app/views/*.scss', ['sass']);
    gulp.watch('app/views/*.html', ['copyHtml']);
    gulp.watch('app/js/*.js', ['webpack']);
});

gulp.task("webpack", function () {
    gulp.src(webpackConfig.entry)
        .pipe(plumber())
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulpUglify())
        .pipe(gulp.dest("dist"));
});
