var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

/*
  compile
  sass - vendors - vendor.css
  sass - custom - custom.css

  js - vendors - vendor.js
  js - custom - custom.js

  watch sass
  watch js
*/

gulp.task('vendorStyles', function() {
  return gulp.src([
    './bower_components/font-awesome/scss/font-awesome.scss',
    './css/foundation-includes.scss'
  ])
  .pipe(sass({
    includePaths: [
      './bower_components/font-awesome/scss',
      './bower_components/foundation-sites/scss'
    ],
    outputStyle: 'compressed'
  }))
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('./css'));
});

gulp.task('customStyles', function() {
  return gulp.src([
    './css/custom.scss'
  ])
  .pipe(sass())
  .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('./css/*.scss', ['vendorStyles', 'customStyles']);
});

gulp.task('default', ['vendorStyles', 'customStyles']);
