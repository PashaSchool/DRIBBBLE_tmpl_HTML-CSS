var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();;

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./css/*.sass", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);

});

gulp.task('sass', function() {
   return gulp.src('./css/*.sass')
        .pipe(sass()).on('error', notify.onError())
		.pipe(autoprefixer({
					browsers: ['last 15 versions'],
					cascade: false
				}))
        .pipe(gulp.dest('./site/css'))
        .pipe(browserSync.stream());
});
gulp.task('default', ['serve']);


//npm i gulp gulp-sass gulp-autoprefixer gulp-notify browser-sync --save-dev