const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin"); // 压缩图片

const { distImagePath, srcImageGlob } = require("./glob");

const imageminOptions = [
  imagemin.gifsicle({ interlaced: true }),
  imagemin.mozjpeg({ quality: 75, progressive: true }),
  imagemin.optipng({ optimizationLevel: 5 }),
  imagemin.svgo({
    plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
  }),
];

module.exports = function () {
  return src(srcImageGlob).pipe(imagemin(imageminOptions)).pipe(dest(distImagePath));
};
