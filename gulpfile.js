const { src, dest, watch, series } = require("gulp");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const del = require("delete");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

function clearDist(cb) {
  return del(["dist/*.js"], cb);
}

function defaultTask() {
  return src("src/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(concat("all.js"))
    .pipe(dest("dist/"))
    .pipe(
      uglify({})
    )
    .pipe(rename({ extname: ".min.js" }))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/"));
}

// watch("src/*.js", defaultTask);

exports.default = series(clearDist, defaultTask);
