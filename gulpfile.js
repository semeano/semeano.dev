const { series, parallel, src, dest } = require('gulp')
const clean = require('gulp-clean')
const smushit = require('gulp-smushit')
const minifycss = require('gulp-clean-css')
const htmlmin = require('gulp-htmlmin')

function cleanDist() {
  return src('dist', { allowEmpty: true })
		.pipe(clean({ force: true }))
}

function html(cb) {
	src('src/index.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest('dist'))
	cb()
}

function css(cb) {
	src('src/css/*.css')
		.pipe(minifycss({ specialComments: 0 }))
		.pipe(dest('dist/css'))
	cb()
}

function img(cb) {
	src('src/img/*.{jpg,png}')
    .pipe(smushit({ verbose: true }))
    .pipe(dest('dist/img'))
	cb()
}

function font(cb) {
	src('src/font/*.*')
		.pipe(dest('dist/font'))
	cb()
}

function cv(cb) {
	src('src/cv/*.*')
		.pipe(dest('dist/cv'))
	cb()
}

function svg(cb) {
	src('src/svg/*.*')
		.pipe(dest('dist/svg'))
	cb()
}

function terms(cb) {
	src('src/terms/*.*')
		.pipe(dest('dist/terms'))
	cb()
}

function others(cb) {
	src('src/*.*')
		.pipe(dest('dist'))
	cb()
}


exports.default = series(cleanDist, parallel(html, css, img, font, cv, svg, terms, others))
