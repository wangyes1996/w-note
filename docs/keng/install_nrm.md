## 现象：. 
最近几个版本中，使用npm全局安装nrm之后，nrm无法正常使用
报错信息
```shell
Error [ERR_REQUIRE_ESM]: require() of ES Module D:\npm\node_modules\nrm\node_modules\open\index.js from D:\npm\node_modules\nrm\cli.js not supported.
Instead change the require of index.js in D:\npm\node_modules\nrm\cli.js to a dynamic import() which is available in all CommonJS modules.
at Object. (D:\npm\node_modules\nrm\cli.js:9:14) {
code: ‘ERR_REQUIRE_ESM’
}
```
## 原因：
应该使用 open 的 CommonJs规范的包 ，现在 open v9.0.0 是 ES Module 版本的包
## 解决方法：
npm install -g nrm open@8.4.2 --save --registry=https://registry.npm.taobao.org