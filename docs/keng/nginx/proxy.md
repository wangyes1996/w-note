前端请求接口需要代理到后端服务器
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