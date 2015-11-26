'use strict'
const gulp = require('gulp')
const spawn = require('child_process').spawn;

gulp.task('test', function (done) {
  return spawn('npm', ['test'], {
      stdio: 'inherit'
    })
    .on('exit', function (error) {
      if (!error) {
        console.log('Success!');
      }
      done()
    });
})

// Default
gulp.task('default', ['test'], function () {
  gulp.watch(['**/*.js', '!./node_modules/**'], ['test']);
});
