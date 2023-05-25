## 安装

```shell
sudo yum -y install nginx   # 安装 nginx
sudo yum remove nginx  # 卸载 nginx
```
## 配置 Nginx 服务
```shell
sudo systemctl enable nginx # 设置开机启动 
sudo service nginx start # 启动 nginx 服务
sudo service nginx stop # 停止 nginx 服务
sudo service nginx restart # 重启 nginx 服务
sudo service nginx reload # 重新加载配置，一般是在修改过 nginx 配置文件时使用。
```
## 配置conf
  - 默认的配置文件为：/etc/nginx/nginx.conf
  - 自定义配置文件目录为: /etc/nginx/conf.d/


## 使用nginx部署多个前端项目

[掘金地址](https://juejin.cn/post/6844904183879958541 "掘金")

## 坑啊
   1. 前端请求接口需要代理到后端服务器
```shell
server {
  listen 5000;
  server_name localhost;

  location / {
    proxy_pass http://localhost:3000;
  }
  location /api/ {
    proxy_pass http://localhost:4000;
  }
}

```
该配置启用了 localhost:5000 的服务器，将 localhost:5000 下开头为 /api/ url 请求代理到了 localhost:4000（后端接口服务器）。其他请求则是代理到 localhost:3000（前端）。

>修改完配置后需要重置nginx配置  nginx -s reload 或者 systemctl reload nginx.service
