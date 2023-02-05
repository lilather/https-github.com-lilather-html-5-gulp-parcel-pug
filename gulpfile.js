const { src, dest } = require('gulp');
const pug = require('gulp-pug');

exports.pug = () => {
  return src('./src/pug/*.pug')
    .pipe(
      pug({
        // Your options in here.
      })
    )
    .pipe(dest('./src/pages/*html'));
};
