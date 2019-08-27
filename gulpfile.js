var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import')
browserSync = require('browser-sync').create();

gulp.task('default', function(){
    console.log("Horrya you created a task");
    
});

gulp.task('html', function(){
    //console.log("Imagine something useful");
    browserSync.reload();
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport,cssvars,nested,autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
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