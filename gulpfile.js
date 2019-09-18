var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
// file compiled
var cssWatch = "./assets/sass/arrowdesign.scss";
var cssWatchUrl = "./assets/sass/*";
var cssDest = "./assets/css/"
//compile

function watch_css() {
    gulp.watch(cssWatch, css)
}

function css(done) {
    gulp.src(cssWatch)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest(cssDest))
        .pipe( notify({message: 'GULP: compilation fait!'}) )
        ;
    done();
}

function watch_css(done) {
    gulp.watch(cssWatchUrl, css);
}

gulp.task('css_watch', gulp.series(watch_css));
gulp.task('css', css);