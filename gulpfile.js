var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    babelify = require('babelify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    strip = require('gulp-strip-comments'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

// Active Path
// original
/*
var activePath = {
  "inputFiles": [
    "./css/foundation-includes.scss",
    "./js/custom.js"
  ],
  "outputFiles": [
    "./css",
    "./js",
    "./fonts"
  ]
}
*/

// laravel
/*
var activePath = {
  "inputFiles": [
    "./resources/assets/css/foundation-includes.scss",
    "./resources/assets/js/custom.js",
    "./resources/assets/js/app.jsx",
    "./resources/assets/images/*"
  ],
  "outputFiles": [
    "./public/css",
    "./public/js",
    "./public/fonts",
    "./public/images"
  ],
  "watchFiles": [
    './resources/assets/css/*.scss',
    './resources/assets/js/custom.js',
    './resources/assets/js/app.jsx',
    './resources/assets/images/*'
  ],
  "watchTasks": [
    'styles',
    'scripts',
    'app',
    'images'
  ]
}
*/

// public
var activePath = {
  "inputFiles": [
    "./css/foundation-includes.scss",
    "./js/custom.js",
    "./js/app.jsx",
    "./images/*"
  ],
  "outputFiles": [
    "./public/css",
    "./public/js",
    "./public/fonts",
    "./public/images"
  ],
  "watchFiles": [
    './css/*.scss',
    './js/custom.js',
    './js/*.jsx',
    './images/*'
  ],
  "watchTasks": [
    'styles',
    'scripts',
    'app',
    'images'
  ]
}


// Source Files
var sassSource = [
  './node_modules/foundation-sites/scss',
  './node_modules/font-awesome/scss'
]

var foundationJSPath = './node_modules/foundation-sites/js/';
var jsScripts = [
  './node_modules/react/dist/react.min.js',
  './node_modules/react-dom/dist/react-dom.min.js',
  //'./node_modules/jquery/dist/jquery.js',

  //foundationJSPath + 'foundation.core.js',
  //foundationJSPath + 'foundation.util.box.js',
  //foundationJSPath + 'foundation.util.keyboard.js',
  //foundationJSPath + 'foundation.util.mediaQuery.js',
  //foundationJSPath + 'foundation.util.motion.js',
  //foundationJSPath + 'foundation.util.nest.js',
  //foundationJSPath + 'foundation.util.timerAndImageLoader.js',
  //foundationJSPath + 'foundation.util.touch.js',
  //foundationJSPath + 'foundation.util.triggers.js',
  //foundationJSPath + 'foundation.abide.js',
  //foundationJSPath + 'foundation.accordion.js',
  //foundationJSPath + 'foundation.accordionMenu.js',
  //foundationJSPath + 'foundation.drilldown.js',
  //foundationJSPath + 'foundation.dropdown.js',
  //foundationJSPath + 'foundation.dropdownMenu.js',
  //foundationJSPath + 'foundation.equalizer.js',
  //foundationJSPath + 'foundation.interchange.js',
  //foundationJSPath + 'foundation.magellan.js',
  //foundationJSPath + 'foundation.offcanvas.js',
  //foundationJSPath + 'foundation.orbit.js',
  //foundationJSPath + 'foundation.responsiveMenu.js',
  //foundationJSPath + 'foundation.responsiveToggle.js',
  //foundationJSPath + 'foundation.reveal.js',
  //foundationJSPath + 'foundation.slider.js',
  //foundationJSPath + 'foundation.sticky.js',
  //foundationJSPath + 'foundation.tabs.js',
  //foundationJSPath + 'foundation.toggler.js',
  //foundationJSPath + 'foundation.tooltip.js',
  
  //./node_modules/smoothstate/src/jquery.smoothState.js', // Animation - requires jQuery

  activePath.inputFiles[1]
]

var fonts = [
  //'./node_modules/google-fonts/apache/<name_of_font>/*.ttf',
  //'./node_modules/google-fonts/ofl/<name_of_font>/*.ttf',
  './node_modules/font-awesome/fonts/*'
]

// =======================================================================

// Build Process
gulp.task('styles', function() {
  return gulp.src( activePath.inputFiles[0] )
  .pipe(sass({
    includePaths: sassSource,
    outputStyle: 'compressed'
  }))
  .pipe(concat('styles.css'))
  .pipe(gulp.dest( activePath.outputFiles[0] ));
});

gulp.task('scripts', function() {
  return gulp.src(jsScripts)
  .pipe(babel({
    presets:['es2015']
  }))
  .pipe(concat('scripts.js'))
  .pipe(strip())
  .pipe(uglify())
  .pipe(gulp.dest( activePath.outputFiles[1] ));
});

gulp.task('app', function() {
  return browserify({
    entries: activePath.inputFiles[2],
    debug: true
  })
  .transform(babelify.configure({
    presets: ['react', 'es2015']
  }))
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest(activePath.outputFiles[1]));
});

gulp.task('fonts', function() {
  return gulp.src(fonts)
  .pipe(gulp.dest( activePath.outputFiles[2] ));
});

gulp.task('images', function() {
  return gulp.src( activePath.inputFiles[3] )
  .pipe(gulp.dest( activePath.outputFiles[3] ));
});

gulp.task('watch', function() {
  gulp.watch( activePath.watchFiles, activePath.watchTasks );
});

gulp.task('default', ['styles', 'scripts', 'app', 'fonts', 'images']);
