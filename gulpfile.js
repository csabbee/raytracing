/**
 * Created by csabi on 2014.10.27..
 */

var gulp = require('gulp');
var ts = require('gulp-typescript');
var eventStream = require('event-stream');

var path = {
    typescripts: './app/scripts/**/*.ts',
    dist: './dist'
};

var tsProject = ts.createProject({
    declarationFiles: true,
    noExternalResolve: false
});

gulp.task('typescript', function () {
    var tsResult = gulp.src(path.typescripts)
        .pipe(ts(tsProject));

    return eventStream.merge(
        tsResult.dts.pipe(gulp.dest(path.dist+'/definitions')),
        tsResult.js.pipe(gulp.dest(path.dist+'/js'))
    );
});

gulp.task('watch', function () {
    gulp.watch(path.typescripts, ['typescript']);
});