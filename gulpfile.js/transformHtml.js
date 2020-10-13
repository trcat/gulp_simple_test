const { src, dest } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const { srcHtmlGlob, distHtmlPath } = require("./glob");

module.exports = function () {
  return src(srcHtmlGlob)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(distHtmlPath));
};
