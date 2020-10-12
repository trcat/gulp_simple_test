const { src, dest } = require("gulp");
const { babel } = require("@rollup/plugin-babel");
const rollup = require("gulp-better-rollup");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const uglify = require("gulp-uglify");

const { distJavaScriptPath, entry } = require("./glob");

module.exports = function () {
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
