var gulp        = require('gulp'),
    sass        = require('gulp-sass');


gulp.task('sass' , function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./css'))
});

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});