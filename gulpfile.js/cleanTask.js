const {
  distJavaScriptGlob,
  distCSSGlob,
  distImageGlob,
  distHtmlGlob,
} = require("./glob");
const del = require("delete"); // 删除指定 glob 的内容

function cleanJavaScriptTask(cb) {
  return del([distJavaScriptGlob], cb);
}

function cleanCSSTask(cb) {
  return del([distCSSGlob], cb);
}

function cleanImageTask(cb) {
  return del([distImageGlob], cb);
}

function cleanHtmlTask(cb) {
  return del([distHtmlGlob], cb);
}

module.exports = {
  cleanJavaScriptTask,
  cleanCSSTask,
  cleanImageTask,
  cleanHtmlTask,
};
