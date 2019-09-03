var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('html', function(){
    //console.log("Imagine something useful");
    browserSync.reload();
});

gulp.task('watch', () => {
   browserSync.init({
    server:{
        baseDir: "app"
    }   
   });
    
    watch('./app/index.html', gulp.series('html'));
    
    
    watch('./app/assets/styles/**/*.css', gulp.series('styles','cssInject'));
        
});

gulp.task('cssInject', function(){
   return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});