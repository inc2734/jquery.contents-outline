'use strict';

/**
 * Import node modules
 */
var gulp         = require('gulp');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify');
var rollup       = require('gulp-rollup');
var nodeResolve  = require('rollup-plugin-node-resolve');
var commonjs     = require('rollup-plugin-commonjs');
var babel        = require('rollup-plugin-babel');

var dir = {
  src: 'src',
  dist: 'dist',
};

/**
 * Build javascript
 */
gulp.task('js', function() {
  return gulp.src(dir.src + '/**/*.js')
    .pipe(rollup({
      allowRealFiles: true,
      input: dir.src + '/jquery.contents-outline.js',
      format: 'iife',
      external: ['jquery'],
      globals: {
        jquery: "jQuery"
      },
      plugins: [
        nodeResolve({ jsnext: true }),
        commonjs(),
        babel({
          presets: [
            [
              "env", {
                "modules": false,
                "targets": {
                  "browsers": ['last 2 versions']
                }
              }
            ]
          ],
          plugins: ['external-helpers'],
          babelrc: false
        })
      ]
    }))
    .pipe(gulp.dest(dir.dist))
    .on('end', function() {
      gulp.src([dir.dist + '/jquery.contents-outline.js'])
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(dir.dist));
    });
});

/**
 * Auto Build
 */
gulp.task('watch', function() {
  gulp.watch([dir.src + '/**/*.js'], ['js']);
});

/**
 * Build
 */
gulp.task('build', ['js']);

gulp.task('default', ['watch']);
