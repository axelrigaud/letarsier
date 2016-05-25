// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jade = require('gulp-jade'),
    bower = require('gulp-bower');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Jade
gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src('*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('dist'))
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Concatenate CSS
gulp.task('css', function() {
    return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css',
                     'bower_components/jquery.mb.ytplayer/dist/css/jquery.mb.YTPlayer.min.css',
                     'bower_components/animsition/dist/css/animsition.css',
                     'bower_components/owl-carousel2/dist/assets/owl.carousel.css',
                     'bower_components/owl-carousel2/dist/assets/owl.theme.default.css',
                      'css/animate.css',
                      'css/style.css'
                      ])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/css'));
});

// Install Bower dependecies
gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest('./bower_components')) 
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['bower_components/jquery/dist/jquery.js',
                     'bower_components/animsition/dist/js/jquery.animsition.js',
                     'bower_components/bootstrap/dist/js/bootstrap.js',
                     'bower_components/jquery.easing/js/jquery.easing.js',
                     'bower_components/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js',
                     'bower_components/owl-carousel2/dist/owl.carousel.js',
                     'js/main.js'
                     ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'));
        // .pipe(rename('all.min.js'))
        // .pipe(uglify())
        // .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('css/*.css', ['css']);
    gulp.watch(['*.jade','includes/*.jade'], ['jade']);
});

// Default Task
gulp.task('default', ['bower', 'scripts', 'sass', 'css', 'jade', 'watch']);
