var gulp = require('gulp'); 
var concat = require('gulp-concat'); 
var minify = require('gulp-minify'); 
var cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');


gulp.task('allJs', function(){    
    return gulp.src([
        'js/plugin.js',
        'js/slider-setting.js',
    ])          
        .pipe(concat('all.js'))
        .pipe(minify())       
        .pipe(gulp.dest('dest/js')); 
});


gulp.task('minify', () => {
    return gulp.src([
        'css/slick.css',
    ])
    .pipe(concat('all.css'))
    .pipe(cleanCSS())       
    .pipe(gulp.dest('dest/css'));
  });

  gulp.task('img', async () => {
    gulp.src('images/*')
      .pipe(imagemin())
      .pipe(webp())
      .pipe(gulp.dest('dest/img'))
  });