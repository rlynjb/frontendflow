var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var strip = require('gulp-strip-comments');

/*
  compile
  sass - vendors - vendor.css
  sass - custom - custom.css

  js - vendors - vendor.js
  js - custom - custom.js

  watch sass
  watch js
*/

gulp.task('styles', function() {
  return gulp.src([
    //'./bower_components/font-awesome/scss/font-awesome.scss',
    './css/foundation-includes.scss'
  ])
  .pipe(sass({
    includePaths: [
      //'./bower_components/font-awesome/scss',
      './bower_components/foundation-sites/scss'
    ],
    outputStyle: 'compressed'
  }))
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
  return gulp.src([
    './bower_components/jquery/dist/jquery.js',
    './bower_components/smoothstate/src/jquery.smoothState.js',
    './bower_components/foundation-sites/js/foundation.core.js',
    //'./bower_components/foundation-sites/js/foundation.util.box.js',
    //'./bower_components/foundation-sites/js/foundation.util.keyboard.js',
    //'./bower_components/foundation-sites/js/foundation.util.mediaQuery.js',
    //'./bower_components/foundation-sites/js/foundation.util.motion.js',
    //'./bower_components/foundation-sites/js/foundation.util.nest.js',
    //'./bower_components/foundation-sites/js/foundation.util.timerAndImageLoader.js',
    //'./bower_components/foundation-sites/js/foundation.util.touch.js',
    //'./bower_components/foundation-sites/js/foundation.util.triggers.js',
    //'./bower_components/foundation-sites/js/foundation.abide.js',
    //'./bower_components/foundation-sites/js/foundation.accordion.js',
    //'./bower_components/foundation-sites/js/foundation.accordionMenu.js',
    //'./bower_components/foundation-sites/js/foundation.drilldown.js',
    //'./bower_components/foundation-sites/js/foundation.dropdown.js',
    //'./bower_components/foundation-sites/js/foundation.dropdownMenu.js',
    //'./bower_components/foundation-sites/js/foundation.equalizer.js',
    //'./bower_components/foundation-sites/js/foundation.interchange.js',
    //'./bower_components/foundation-sites/js/foundation.magellan.js',
    //'./bower_components/foundation-sites/js/foundation.offcanvas.js',
    //'./bower_components/foundation-sites/js/foundation.orbit.js',
    //'./bower_components/foundation-sites/js/foundation.responsiveMenu.js',
    //'./bower_components/foundation-sites/js/foundation.responsiveToggle.js',
    //'./bower_components/foundation-sites/js/foundation.reveal.js',
    //'./bower_components/foundation-sites/js/foundation.slider.js',
    //'./bower_components/foundation-sites/js/foundation.sticky.js',
    //'./bower_components/foundation-sites/js/foundation.tabs.js',
    //'./bower_components/foundation-sites/js/foundation.toggler.js',
    //'./bower_components/foundation-sites/js/foundation.tooltip.js',
    './js/custom.js'
  ])
  .pipe(concat('scripts.js'))
  .pipe(strip())
  .pipe(gulp.dest('./js'));
});

gulp.task('fonts', function() {
  return gulp.src([
    './bower_components/font-awesome/fonts/FontAwesome.otf',
    './bower_components/font-awesome/fonts/fontawesome-webfont.eot',
    './bower_components/font-awesome/fonts/fontawesome-webfont.svg',
    './bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
    './bower_components/font-awesome/fonts/fontawesome-webfont.woff',
    './bower_components/font-awesome/fonts/fontawesome-webfont.woff2'
  ])
  .pipe(gulp.dest('./fonts'));
});

gulp.task('watch', function() {
  gulp.watch('./css/*.scss', ['styles', 'scripts']);
});

gulp.task('default', ['styles', 'scripts', 'fonts']);
