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
import plumber from 'gulp-plumber';

// HTML to Distribution folder
gulp.task('copyHtml', () => {
    gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});

// Convert Sass to Css
gulp.task('sass', () => {
    gulp.src('app/scss/*.scss')
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
gulp.task('default', ['copyHtml', 'sass', 'flexbox', 'webpack', 'imageMin']);

//Watch
gulp.task('watch', () => {
    gulp.watch('app/dist/*.css', ['sass']);
    gulp.watch('app/dist/*.html', ['copyHtml']);
    gulp.watch('app/dist/*.js', ['webpack']);
});

gulp.task("webpack", function () {
    gulp.src(webpackConfig.entry)
        .pipe(plumber())
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulpUglify())
        .pipe(gulp.dest("dist"));
});

// Image min
gulp.task('imageMin', () =>
    gulp.src('app/assets/*')
        .pipe(gulpImageMin())
        .pipe(gulp.dest('dist/assets'))
);