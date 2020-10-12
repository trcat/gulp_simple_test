const { src, dest, series } = require("gulp");
const babel = require("gulp-babel");
const del = require("delete");
const concat = require("gulp-concat");

const distJavaScriptPath = "dist/js/";
const srcJavaScriptPath = "src/";
const distJavaScriptGlob = `${distJavaScriptPath}*.js`;
const srcJavaScriptGlob = `${srcJavaScriptPath}*.js`;
const distJavaScriptName = "index.js";

function clearDist(cb) {
  return del([distJavaScriptGlob], cb);
}

function defaultTask() {
  return src(srcJavaScriptGlob)
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(concat(distJavaScriptName))
    .pipe(dest(distJavaScriptPath));
}

// watch("src/*.js", defaultTask);

exports.default = series(clearDist, defaultTask);
