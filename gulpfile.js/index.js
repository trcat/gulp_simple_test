const { series, parallel, watch } = require("gulp");
const {
  cleanJavaScriptTask,
  cleanCSSTask,
  cleanImageTask,
  cleanHtmlTask,
} = require("./cleanTask");
const transformJavaScript = require("./transformJavaScript");
const transformCSS = require("./transformCSS");
const transformImage = require("./transformImage");
const transformHtml = require("./transformHtml");
const {
  srcCSSGlob,
  srcJavaScriptGlob,
  srcImageGlob,
  srcHtmlGlob,
} = require("./glob");

if (process.env.NODE_ENV === "development") {
  watch(srcCSSGlob, series(cleanCSSTask, transformCSS));
  watch(srcJavaScriptGlob, series(cleanJavaScriptTask, transformJavaScript));
  watch(srcImageGlob, series(cleanImageTask, transformImage));
  watch(srcHtmlGlob, series(cleanHtmlTask, transformHtml));
}

exports.imagemin = series(cleanImageTask, transformImage);
exports.default = series(
  parallel(cleanCSSTask, cleanJavaScriptTask, cleanImageTask, cleanHtmlTask),
  parallel(transformCSS, transformJavaScript, transformImage),
  transformHtml
);
