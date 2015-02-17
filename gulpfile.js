'use strict';

var gulp = require('gulp');
var gulpconfig = require('./gulpconfig');
var glob = require("glob");

var print = require('gulp-print');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var htmlreplace = require('gulp-html-replace');
var html2js = require('gulp-html2js');
var connect = require('gulp-connect');


gulp.task('clean', function(cb) {
    del([
        'build'
    ], cb);
});


gulp.task('copy assets', ['clean'], function() {
    var stream = gulp.src('src/assets/**')
        .pipe(gulp.dest('build/assets'));

    return stream;
});

gulp.task('copy scripts', ['clean'], function() {
    var stream = gulp.src(['src/index.js', 'src/components/**/*.js', 'src/views/**/*.js'])
        .pipe(concat('app.js', {newLine: '; '}))
        .pipe(gulp.dest('build/assets'));

    return stream;
});

gulp.task('compile libraries', ['clean'], function() {
    var stream = gulp.src(gulpconfig.vendorScripts)
        .pipe(ngAnnotate())
        .pipe(concat('libraries.js', {newLine: '; '}))
        .pipe(uglify())
        .pipe(gulp.dest('build/assets'));

    return stream;
});

gulp.task('compile less', ['clean'], function() {
    var stream = gulp.src(gulpconfig.lessMain)
        .pipe(less())
        .pipe(gulp.dest('build/assets'));

    return stream;
});

gulp.task('compile templates', ['clean'], function() {
    gulp.src('src/**/*.tpl.html')
        .pipe(html2js({
            outputModuleName: 'templates'
        }))
        .pipe(concat('templates.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/assets'))
});


gulp.task('compile index', ['clean', 'copy assets', 'compile libraries', 'compile less', 'compile templates', 'copy scripts'], function(cb) {
    var stream = gulp.src('src/index.html')
        .pipe(htmlreplace({
            'css': 'assets/main.css',
            'js': ['assets/libraries.js', 'assets/templates.js', 'assets/app.js']
        }))
        .pipe(connect.reload())
        .pipe(gulp.dest('build'), cb);

    return stream;
});

gulp.task('compile', ['clean', 'copy assets', 'compile libraries', 'compile less', 'compile index', 'compile templates', 'copy scripts'], function() {

});


gulp.task('serve', ['compile'], function() {
    connect.server({
        root: 'build',
        livereload: true,
        port: 4001
    });
});

gulp.task('watch', ['serve'], function () {
    gulp.watch(['src/**/*'], ['compile']);

});

gulp.task('default', function() {
    // place code for your default task here
});




