const { src, dest } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const inject = require("gulp-inject");
const {
  srcHtmlGlob,
  distHtmlPath,
  distCSSGlob,
  distJavaScriptGlob,
} = require("./glob");

const sources = src([distCSSGlob, distJavaScriptGlob], { read: false });
const headSources = src("dist/lib/*", { read: false });

module.exports = function () {
  return src(srcHtmlGlob)
    .pipe(dest(distHtmlPath))
    .pipe(inject(sources, { relative: true, addPrefix: "." }))
    .pipe(
      inject(headSources, { name: "head", relative: true, addPrefix: "." })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyCSS: true,
      })
    )
    .pipe(dest(distHtmlPath));
};
