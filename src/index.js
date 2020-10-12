import '@babel/polyfill'
import Component from "./component";
import Test from "./test";

new Component().init("body").then((r) => {
  console.log(r);
});
new Test().init();
