var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    strip = require('gulp-strip-comments');

// Source Files
var sassFiles = [
  /* frontend flow - default path */
  //'./css/foundation-includes.scss'

  /* Laravel path */
  './resources/assets/sass/foundation-includes.scss'
]
var sassSource = [
  './bower_components/motion-ui',
  './bower_components/foundation-sites/scss',
  './bower_components/font-awesome/scss'
]
var jsScripts = [
  /* DOM */
  //'./bower_components/react/react.js',
  //'./bower_components/react/react-dom.js',
  './bower_components/jquery/dist/jquery.js',

  /* Zurb Foundation stuff - requires jQuery */
  //'./bower_components/foundation-sites/js/foundation.core.js',
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
  
  /* Animation */
  //./bower_components/smoothstate/src/jquery.smoothState.js', // requires jQuery
  //'./bower_components/motion-ui/dist/motion-ui.js',

  /* Your javascript file */
  //'./js/custom.js' // original path
  './resources/assets/js/custom.js' // Laravel path
]
var fonts = [
  //'./bower_components/google-fonts/apache/<name_of_font>/*.ttf',
  //'./bower_components/google-fonts/ofl/<name_of_font>/*.ttf',
  './bower_components/font-awesome/fonts/FontAwesome.otf',
  './bower_components/font-awesome/fonts/fontawesome-webfont.eot',
  './bower_components/font-awesome/fonts/fontawesome-webfont.svg',
  './bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
  './bower_components/font-awesome/fonts/fontawesome-webfont.woff',
  './bower_components/font-awesome/fonts/fontawesome-webfont.woff2'
]


// Build Process
gulp.task('styles', function() {
  return gulp.src(sassFiles)
  .pipe(sass({
    includePaths: sassSource,
    outputStyle: 'compressed'
  }))
  .pipe(concat('styles.css'))
  //.pipe(gulp.dest('./css')); // Original path
  //.pipe(gulp.dest('./web/css')); // Magento2 path
  .pipe(gulp.dest('./public/css')); // Laravel path
});

gulp.task('scripts', function() {
  return gulp.src(jsScripts)
  .pipe(babel({
    presets:['es2015']
  }))
  .pipe(concat('scripts.js'))
  .pipe(strip())
  //.pipe(gulp.dest('./js')); // Original path
  //.pipe(gulp.dest('./web/js')); // Magento2 path
  .pipe(gulp.dest('./public/js')); // Laravel path
});

gulp.task('app', function() {
  return gulp.src('./js/app.jsx')
  .pipe(babel({
    presets: ['react', 'es2015']
  }))
  //.pipe(gulp.dest('./js')); // Original path
  //.pipe(gulp.dest('./web/js')); // Magento2 path
  .pipe(gulp.dest('./public/js')); // Laravel path
});

gulp.task('fonts', function() {
  return gulp.src(fonts)
  //.pipe(gulp.dest('./fonts')); // Original path
  //.pipe(gulp.dest('./web/fonts')); // Magento2 path
  .pipe(gulp.dest('./public/fonts')); // Laravel path
});


gulp.task('watch', function() {
  /* Original path */
  //gulp.watch(['./css/*.scss', './js/custom.js', './js/app.jsx'], ['styles', 'scripts', 'app']);
  
  /* Laravel Path */
  gulp.watch(['./resources/assets/sass/*.scss', './resources/assets/js/custom.js', './resources/assets/js/app.jsx'], ['styles', 'scripts', 'app']);
});

gulp.task('default', ['styles', 'scripts', 'app', 'fonts']);
