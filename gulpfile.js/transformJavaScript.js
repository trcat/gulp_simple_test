const { src, dest } = require("gulp");
const rollup = require("gulp-better-rollup"); // rollup 编译 es6 模块化语法
const { babel } = require("@rollup/plugin-babel"); // rollup babel 插件，将 es6 语法编译成 es5 语法
const { nodeResolve } = require("@rollup/plugin-node-resolve"); // 实现本地 node modules 的使用
const commonjs = require("@rollup/plugin-commonjs"); // 将 commonjs 转换为 es6 模块化语法，使得 rollup 生效
const uglify = require("gulp-uglify"); // 压缩 javascript

const { distJavaScriptPath, entry } = require("./glob");

const babelOptions = {
  presets: [["@babel/preset-env"]],
};
const rollupPlugins = [commonjs(), nodeResolve(), babel(babelOptions)];
const rollupInputOptions = { plugins: rollupPlugins };
const rollupOutputOptions = { format: "iife" };

module.exports = function () {
  return src(entry)
    .pipe(rollup(rollupInputOptions, rollupOutputOptions))
    .pipe(uglify())
    .pipe(dest(distJavaScriptPath));
};
