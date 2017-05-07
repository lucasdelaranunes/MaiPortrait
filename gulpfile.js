var gulp = require('gulp');
var concat = require('gulp-concat');  
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

//script paths in the desired order
var jsFiles = [
			   'assets/scripts/original/webfont.min.js',
			   'assets/scripts/original/jquery.min.js',
			   'assets/scripts/original/bootstrap.min.js',
			   'assets/scripts/original/jquery.easing.min.js',
			   'assets/scripts/original/scrollreveal.min.js',
			   'assets/scripts/original/jquery.magnific-popup.min.js',
			   'assets/scripts/original/creative.min.js',
			   'assets/scripts/original/wow.min.js'
			  ],    
    jsDest = 'assets/scripts/concat';

//styles paths in the desired order
var cssFiles = [
			   'assets/styles/css/originals/bootstrap.min.css',
			   'assets/styles/css/originals/font-awesome.min.css',
			   'assets/styles/css/originals/magnific-popup.css',
			   'assets/styles/css/originals/animate.css',
			   'assets/styles/css/originals/creative.min.css'
			  ],    
    cssDest = 'assets/styles/css/concat';

var	htmlFile = 'index.html',
	htmlDest = 'index.min.html';

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});


gulp.task('styles', function() {  
    return gulp.src(cssFiles)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(cssDest))
        .pipe(rename('styles.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(cssDest));
});

gulp.task('htmlmin', function() {
  return gulp.src(htmlFile)
    .pipe(htmlmin({collapseWhitespace: true, 
    	removeComments: true, 
    	removeScriptTypeAttributes: true, 
    	removeStyleLinkTypeAttributes: true
    }))
    .pipe(rename('index.min.html'))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['scripts', 'styles', 'html']);