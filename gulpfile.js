/**
 * Created by csabi on 2014.10.27..
 */

var gulp = require('gulp');
var ts = require('gulp-typescript');
var eventStream = require('event-stream');
var clean = require('gulp-clean');

var path = {
    typescripts: './app/scripts/**/*.ts',
    dist: './dist',
    def: './app/raytrace.d.ts'
};

var tsProject = ts.createProject({
    declarationFiles: true,
    noExternalResolve: false
});

gulp.task('clean', function () {
    return gulp.src([path.dist+'/**/*.js', path.dist+'/**/*.ts'], {read: false})
        .pipe(clean());
});

gulp.task('typescript', function () {
    var tsResult = gulp.src(path.typescripts)
        .pipe(ts(tsProject));

    var definition = gulp.src(path.def);
    return eventStream.merge(
        tsResult.dts.pipe(gulp.dest(path.dist+'/definitions')),
        tsResult.js.pipe(gulp.dest(path.dist+'/js')),
        definition.pipe(gulp.dest(path.dist))
    );
});

gulp.task('watch', function () {
    gulp.watch(path.typescripts, ['clean','typescript']);
});