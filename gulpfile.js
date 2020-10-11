const { src, dest, watch, series } = require("gulp");
const babel = require("gulp-babel");
const del = require("delete");
const browserify = require("browserify");

function clearDist(cb) {
  return del(["dist/*.js", "dist/*.map"], cb);
}

function defaultTask() {
  return browserify({
    entries: "src/index.js",
  })
    .bundle()
    .pipe(src("src/*.js"))
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(dest("dist/"));
}

// watch("src/*.js", defaultTask);

exports.default = series(clearDist, defaultTask);
