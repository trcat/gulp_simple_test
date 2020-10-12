const { src } = require("gulp");

const distJavaScriptPath = "dist/js/";
const srcJavaScriptPath = "src/";
const distJavaScriptGlob = `${distJavaScriptPath}*.js`;
const entry = `${srcJavaScriptPath}index.js`;

exports.distJavaScriptPath = distJavaScriptPath;
exports.srcJavaScriptPath = srcJavaScriptPath;
exports.distJavaScriptGlob = distJavaScriptGlob;
exports.entry = entry;
