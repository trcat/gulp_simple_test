const { src, dest } = require("gulp");
const postcss = require("gulp-postcss"); // postcss 处理 css 文件
const autoprefixer = require("autoprefixer"); // 参照 package.json 中的 broswerslist 自动添加前缀
const cssnano = require("cssnano"); // 压缩 css

const { srcCSSGlob, distCSSPath } = require("./glob");

module.exports = function () {
  return src(srcCSSGlob)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest(distCSSPath));
};
