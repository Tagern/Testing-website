// include gulp
var gulp = require ('gulp');

// include plug-ins
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

// Watch and automate tasks
gulp.task('default', ['imagemin','moomy'], function(){
	// gulp.watch('./src/*.html', function(){
	// 	gulp.run('htmlmin');
	// });
	gulp.watch('./src/scripts/*.js', function(){
		gulp.run('jshint', 'moomy');
	});
	gulp.watch('./src/styles/*.scss', function(){
		gulp.run('sass');
	});
});

// Converting SCSS to CSS

gulp.task('sass', function () {
  gulp.src('./src/styles/**/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'));
});

// JS hint task
gulp.task('jshint', function(){
	gulp.src('./src/scripts/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

// minify new images

gulp.task('imagemin', function(){
	var imgSrc = './src/images/**/*',
		imgDst = './build/images';

	gulp.src(imgSrc)
		.pipe(changed(imgDst))
		.pipe(imagemin())
		.pipe(gulp.dest(imgDst));
	});

//HTML minify

// gulp.task('htmlmin', function(){
// 	var htmlSrc = './src/*.html',
// 		htmlDst = './build';

// 	gulp.src(htmlSrc)
// 		.pipe(changed(htmlDst))
// 		.pipe(htmlmin())
// 		.pipe(gulp.dest(htmlDst));
// });

// minify and add scripts together

gulp.task('moomy', function(){
	gulp.src(['./src/scripts/*.js'])
		.pipe(concat('main.js'))
		.pipe(stripDebug())
		.pipe(uglify())
		.pipe(gulp.dest('./build/scripts/'));
});
