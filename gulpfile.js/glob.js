const distJavaScriptPath = "dist/js/";
const srcJavaScriptPath = "src/js/";
const distJavaScriptGlob = `${distJavaScriptPath}*.js`;
const entry = `${srcJavaScriptPath}index.js`;

const distCSSPath = "dist/css/";
const srcCSSPath = "src/css/";
const distCSSGlob = `${distCSSPath}*.css`;
const srcCSSGlob = `${srcCSSPath}*.css`;

module.exports = {
  distJavaScriptPath,
  srcJavaScriptPath,
  distJavaScriptGlob,
  entry,
  distCSSPath,
  srcCSSPath,
  distCSSGlob,
  srcCSSGlob,
};
