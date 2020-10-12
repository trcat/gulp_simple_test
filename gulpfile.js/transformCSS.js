const { src, dest } = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const { srcCSSGlob, distCSSPath } = require("./glob");

module.exports = function () {
  return src(srcCSSGlob)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest(distCSSPath));
};
