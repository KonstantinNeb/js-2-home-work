var gulp = require('gulp');
var jade = require('gulp-jade');
var uglify = require('gulp- uglify');

gulp.task('jade', function () {
  return gulp.src('./app/*.jade').pipe(jade()).pipe(gulp.dest('dist'));
});

gulp.task('compress', function () {
  return gulp.src('./app/*.js').pipe(uglify()).pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('./app/*.jade', ['jade']);
})