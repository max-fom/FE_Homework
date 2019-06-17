var gulp        = require('gulp'),
    sass        = require('gulp-sass');
//    browserSync = require('browser-sync');



gulp.task('sass' , function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./css'))
});

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});


// gulp.task('browser-sync', function(){
//     browserSync({
//         server: {
//             baseDir: 'app'    
//         },
//         notify: false
//     });
// });

// gulp.task('sass' , function() {
//     return gulp.src('app/sass/**/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('app/css'))
//         .pipe(browserSync.reload({stream: true}))
// });

//gulp.task('watch', gulp.series('sass', 'browser-sync'), function() {
//    gulp.watch('app/sass/**/*.scss', gulp.series('sass'));
//});