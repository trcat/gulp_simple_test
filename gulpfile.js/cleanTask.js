const { distJavaScriptGlob } = require("./glob");
const del = require("delete");

function cleanJavaScriptTask(cb) {
  return del([distJavaScriptGlob], cb);
}

exports.cleanJavaScriptTask = cleanJavaScriptTask