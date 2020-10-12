const { series, parallel } = require("gulp");
const { cleanJavaScriptTask } = require("./cleanTask");
const transformJavaScript = require("./transformJavaScript");
const transformCSS = require("./transformCSS");

exports.default = series(
  cleanJavaScriptTask,
  parallel(transformCSS, transformJavaScript)
);
