const gulp = require('gulp');

//HTML to Distribution folder
gulp.task('copyHtml', () => {
    gulp.src('app/views/*.html')
        .pipe(gulp.dest('dist'));
});

