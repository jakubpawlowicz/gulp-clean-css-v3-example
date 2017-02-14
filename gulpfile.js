var gulp = require('gulp');
var useref = require('gulp-useref');
var cleanCSS = require('gulp-clean-css');
var gulpif = require('gulp-if');
var uncache = require('gulp-uncache');

var sourceDir = 'src';
var targetDir = 'public';

gulp.task('lib-resources', function () {
  return gulp.src(['src/lib/**/*', '!src/lib/**/*.css'], { base: sourceDir })
    .pipe(gulp.dest(targetDir));
});

gulp.task('build', ['lib-resources'], function () {
  return gulp.src('src/index.html')
    .pipe(useref())
    .pipe(gulpif('*.css', cleanCSS({ target: sourceDir, relativeTo: sourceDir })))
    .pipe(uncache())
    .pipe(gulp.dest(targetDir));
});
