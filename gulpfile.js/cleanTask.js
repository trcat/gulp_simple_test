const { distJavaScriptGlob, distCSSGlob } = require("./glob");
const del = require("delete"); // 删除指定 glob 的内容

function cleanJavaScriptTask(cb) {
  return del([distJavaScriptGlob], cb);
}

function cleanCSSTask(cb) {
  return del([distCSSGlob], cb);
}

exports.cleanJavaScriptTask = cleanJavaScriptTask;
exports.cleanCSSTask = cleanCSSTask;
