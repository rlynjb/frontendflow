var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src([
    './css/styles.scss'
  ]) // source files
  .pipe(sass({
    includePaths: [ './bower_components/foundation-sites/scss/' ],
    outputStyle: 'nested',
    errLogToConsole: true
  })) // using gulp-sass
  .pipe(gulp.dest('./css')) // destination
});
