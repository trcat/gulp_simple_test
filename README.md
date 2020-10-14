# gulp_simple_test
一个简单的测试，以学习 gulp 的使用方法

## 环境部署

- node（10.15.3）

由于本人在国内，受网络影响，需要设置淘宝镜像并安装 `cnpm`，以避免由于网络造成的插件安装失败的问题，具体命令如下：

```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 测试流程
- [x] 使用 `gulp-babel` 编译 ES6 语法
- [x] 使用 `rollup`处理 ES6 的 `import/export` 语法
  - 将原先的 `gulp-babel` 替换成 `@rollup/plugin-babel`
- [x] 使用 `gul-postcss`、`postcss`、`autoprefixer`、`cssnano` 给 css 添加前缀以支持多种浏览器，并压缩 css
- [x] 使用 `gulp-htmlmin`、`gulp-inject` 实现将 css、javascript 注入 html，并将 html 压缩，删除注释
- [x] 使用 `gulp-imagemin` 压缩图片
