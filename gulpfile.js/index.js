const { series } = require("gulp");
const { cleanJavaScriptTask } = require('./cleanTask')
const transformJavaScript = require('./transformJavaScript')

exports.default = series(cleanJavaScriptTask, transformJavaScript);
