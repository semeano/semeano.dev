var gulp = require('gulp');

var del = require('del'),
	minifycss = require('gulp-minify-css'),
	concatcss = require('gulp-concat-css'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	// jshint = require('gulp-jshint'),
	imagemin = require('gulp-imagemin'),
	// useref = require('gulp-useref'),
	minifyhtml = require('gulp-minify-html');


// Clear dist
gulp.task('clear', function () {
	return del.sync('dist');
});

// Fonts
gulp.task('fonts', function () {
	return gulp.src('src/font/*.*')
		.pipe(gulp.dest('dist/font'));
});

// CSS
gulp.task('css', ['css-concat'], function () {
	return gulp.src('temp/css/semeano.min.css')
		.pipe(minifycss({keepSpecialComments:0}))
		.pipe(gulp.dest('dist/css'));
});
gulp.task('css-concat', function () {
	return gulp.src('src/css/*.css')
		.pipe(concatcss('semeano.min.css'))
		.pipe(gulp.dest('temp/css'));
});

// JS
gulp.task('js', function() {
	// return gulp.src('src/js/*.js')
	// 	.pipe(jshint())
	// 	.pipe(jshint.reporter("default"))
	// 	.pipe(uglify())
	// 	.pipe(concat('semeano.min.js'))
	// 	.pipe(gulp.dest('dist/js'));
});

// Images
gulp.task('img', function () {
	return gulp.src('src/img/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
});

// SVG
gulp.task('svg', function () {
	return gulp.src('src/svg/*.svg')
		// .pipe(svgmin())
		.pipe(gulp.dest('dist/svg'));
});

// HTML
gulp.task('html', function () {
	return gulp.src('src/*.html')
		// .pipe(useref())
		.pipe(minifyhtml())
		.pipe(gulp.dest('dist'));
});

// Copy other files
gulp.task('copy', function () {
	return gulp.src(['src/favicon.ico', 'src/terms.pdf', 'src/robots.txt', 'src/sitemap.xml', 'src/sitemap.www.xml'])
		.pipe(gulp.dest('dist'));
});

// Default task
gulp.task('default', ['clear', 'fonts', 'css', 'js', 'img', 'svg', 'html', 'copy'], function () {
	// Clear temp folder	
	return del.sync('temp');
});
