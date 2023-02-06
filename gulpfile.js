const { src, dest } = require('gulp');
const gulp = require('gulp');
const manifest =require('gulp-manifest3')
gulp.task('manifest', function(){
    gulp.src(['dist/*'], { base: './' })
        .pipe(manifest({
            hash: true,
            preferOnline: true,
            network: ['*'],
            filename: 'app.manifest',
            exclude: 'app.manifest'
        }))
        .pipe(dest('dist'));
});