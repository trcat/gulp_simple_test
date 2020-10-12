const { series, parallel } = require("gulp");
const { cleanJavaScriptTask, cleanCSSTask } = require("./cleanTask");
const transformJavaScript = require("./transformJavaScript");
const transformCSS = require("./transformCSS");

exports.default = series(
  parallel(cleanCSSTask, cleanJavaScriptTask),
  parallel(transformCSS, transformJavaScript)
);
