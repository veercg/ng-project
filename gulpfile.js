var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

var paths = {
  scripts: ['app/scripts/**/*.js', '!app/libs/*.js'],
  styles: 'app/css/*.css'
};
// Static server
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    gulp.watch(paths.scripts).on("change", reload);
    gulp.watch(paths.styles).on("change", reload);
});
