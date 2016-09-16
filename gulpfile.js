var gulp = require('gulp');
var pug = require('gulp-pug');
var watch = require('gulp-watch');

/**
 *
 * PUG Task
 *
 */

gulp.task('pug', function buildHTML() {
	return gulp.src('src/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('./dist'))
});


/**
 *
 * Gulp Watch
 *
 */
gulp.task('watch', function () {
	gulp.watch('./src/*.pug', ['pug'])
});

/**
 *
 * Gulp Default Task
 *
 */
gulp.task('default', ['pug', 'watch']);