const { series, parallel, watch } = require("gulp");
const { cleanJavaScriptTask, cleanCSSTask } = require("./cleanTask");
const transformJavaScript = require("./transformJavaScript");
const transformCSS = require("./transformCSS");
const {srcCSSGlob, srcJavaScriptGlob} = require('./glob')

if (process.env.NODE_ENV === 'development') {
  watch(srcCSSGlob, series(cleanCSSTask, transformCSS));
  watch(srcJavaScriptGlob, series(cleanJavaScriptTask, transformJavaScript))
}

exports.default = series(
  parallel(cleanCSSTask, cleanJavaScriptTask),
  parallel(transformCSS, transformJavaScript)
);
