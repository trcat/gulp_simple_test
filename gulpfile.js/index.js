const { series, parallel, watch } = require("gulp");
const {
  cleanJavaScriptTask,
  cleanCSSTask,
  cleanImageTask,
} = require("./cleanTask");
const transformJavaScript = require("./transformJavaScript");
const transformCSS = require("./transformCSS");
const transformImage = require("./transformImage");
const { srcCSSGlob, srcJavaScriptGlob, srcImageGlob } = require("./glob");

if (process.env.NODE_ENV === "development") {
  watch(srcCSSGlob, series(cleanCSSTask, transformCSS));
  watch(srcJavaScriptGlob, series(cleanJavaScriptTask, transformJavaScript));
  watch(srcImageGlob, series(cleanImageTask, transformImage));
}

exports.imagemin = series(cleanImageTask, transformImage);
exports.default = series(
  parallel(cleanCSSTask, cleanJavaScriptTask, cleanImageTask),
  parallel(transformCSS, transformJavaScript, transformImage)
);
