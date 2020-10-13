# gulp_simple_test
一个简单的测试，以学习 gulp 的使用方法

## 测试流程
- [x] 使用 babel 编译 ES6 语法
- [x] 使用 rollup 处理 ES6 的 import/export 语法
  - 将原先的 gulp-babel 替换成 @rollup/plugin-babel
- [x] 使用 gul-postcss、postcss、autoprefixer、cssnano 给 css 添加前缀以支持多种浏览器，并压缩 css
- [x] 使用 gulp-htmlmin、gulp-inject 实现将 css、javascript 注入 html，并将 html 压缩，删除注释
