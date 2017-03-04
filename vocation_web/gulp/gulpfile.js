const gulp = require('gulp');
// 引入依赖包
const sass = require('gulp-sass');
const babel = require('gulp-babel');
 
gulp.task('babel', () => {
    return gulp.src('app/js/example.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/js/compiled'));
});
gulp.task('sass', function(){
    //sass()方法用于转换sass到css
  return gulp.src('app/scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});

//Watching Sass files for changes
gulp.task('watch', function(){
  gulp.watch('app/scss/*.scss', ['sass']); 
  gulp.watch('app/js/*.js', ['babel']); 
  // Other watchers
});

gulp.task('default', ['babel','sass','watch']); 
  // Other watchers