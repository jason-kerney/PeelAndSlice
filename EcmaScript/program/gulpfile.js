'use strict';

const babel = require('gulp-babel');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');

const sourceFiles = [
    'app/**/*.js',
    'index.js',
    '!node_modules/**'
];

const testFiles = [
    'test/**/*.js',
    'ignored/**/*.js'
];

gulp.task('compile', () => {
    return gulp.src('./index.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('sampleKerney.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('lint', () => {
    return gulp.src(sourceFiles)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('pre-test', function () {
    return gulp.src(sourceFiles)
        .pipe(istanbul({ includeUntested: true }))
        .pipe(istanbul.hookRequire());
});

gulp.task('test', ['lint', 'pre-test'], function () {
    gulp.src(testFiles, { read: false })
        .pipe(mocha())
        .pipe(istanbul.writeReports({ reporters: ['text-summary'] }))
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 80 } }));
});

gulp.task('build', ['test', 'compile']);
