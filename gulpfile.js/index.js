const { src, dest, series } = require("gulp");
const { babel } = require("@rollup/plugin-babel");
const del = require("delete");
const rollup = require("gulp-better-rollup");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const uglify = require("gulp-uglify");

const distJavaScriptPath = "dist/js/";
const srcJavaScriptPath = "src/";
const distJavaScriptGlob = `${distJavaScriptPath}*.js`;
const entry = `${srcJavaScriptPath}index.js`;

function clearDist(cb) {
  return del([distJavaScriptGlob], cb);
}

function javascript() {
  return src(entry)
    .pipe(
      rollup(
        {
          plugins: [
            commonjs(),
            nodeResolve(),
            babel({
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      browsers: "last 2 versions, > 1%, ie >= 9",
                    },
                  },
                ],
              ],
            }),
          ],
        },
        {
          format: "iife",
        }
      )
    )
    .pipe(uglify())
    .pipe(dest(distJavaScriptPath));
}

// watch("src/*.js", defaultTask);

exports.default = series(clearDist, javascript);
