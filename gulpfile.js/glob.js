const distJavaScriptPath = "dist/js/";
const srcJavaScriptPath = "src/js/";
const distJavaScriptGlob = `${distJavaScriptPath}*.js`;
const srcJavaScriptGlob = `${srcJavaScriptPath}*.js`;
const entry = `${srcJavaScriptPath}index.js`;

const distCSSPath = "dist/css/";
const srcCSSPath = "src/css/";
const distCSSGlob = `${distCSSPath}*.css`;
const srcCSSGlob = `${srcCSSPath}*.css`;

const distImagePath = "dist/image/";
const srcImagePath = "src/image/";
const distImageGlob = `${distImagePath}**/*`;
const srcImageGlob = `${srcImagePath}**/*`;

module.exports = {
  distJavaScriptPath,
  srcJavaScriptPath,
  distJavaScriptGlob,
  srcJavaScriptGlob,
  entry,
  distCSSPath,
  srcCSSPath,
  distCSSGlob,
  srcCSSGlob,
  distImagePath,
  srcImagePath,
  distImageGlob,
  srcImageGlob,
};
