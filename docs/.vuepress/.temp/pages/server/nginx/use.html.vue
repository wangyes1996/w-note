<template><div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> nginx   <span class="token comment"># 安装 nginx</span></span>
<span class="line"><span class="token function">sudo</span> yum remove nginx  <span class="token comment"># 卸载 nginx</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-nginx-服务" tabindex="-1"><a class="header-anchor" href="#配置-nginx-服务"><span>配置 Nginx 服务</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx <span class="token comment"># 设置开机启动 </span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">service</span> nginx start <span class="token comment"># 启动 nginx 服务</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">service</span> nginx stop <span class="token comment"># 停止 nginx 服务</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">service</span> nginx restart <span class="token comment"># 重启 nginx 服务</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">service</span> nginx reload <span class="token comment"># 重新加载配置，一般是在修改过 nginx 配置文件时使用。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置conf" tabindex="-1"><a class="header-anchor" href="#配置conf"><span>配置conf</span></a></h2>
<ul>
<li>默认的配置文件为：/etc/nginx/nginx.conf</li>
<li>自定义配置文件目录为: /etc/nginx/conf.d/</li>
</ul>
<h2 id="使用nginx部署多个前端项目" tabindex="-1"><a class="header-anchor" href="#使用nginx部署多个前端项目"><span>使用nginx部署多个前端项目</span></a></h2>
<p><a href="https://juejin.cn/post/6844904183879958541" title="掘金" target="_blank" rel="noopener noreferrer">掘金地址</a></p>
<h2 id="坑啊" tabindex="-1"><a class="header-anchor" href="#坑啊"><span>坑啊</span></a></h2>
<ol>
<li>前端请求接口需要代理到后端服务器</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">  listen <span class="token number">5000</span><span class="token punctuation">;</span></span>
<span class="line">  server_name localhost<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  location / <span class="token punctuation">{</span></span>
<span class="line">    proxy_pass http://localhost:3000<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  location /api/ <span class="token punctuation">{</span></span>
<span class="line">    proxy_pass http://localhost:4000<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该配置启用了 localhost:5000 的服务器，将 localhost:5000 下开头为 /api/ url 请求代理到了 localhost:4000（后端接口服务器）。其他请求则是代理到 localhost:3000（前端）。</p>
<blockquote>
<p>修改完配置后需要重置nginx配置  nginx -s reload 或者 systemctl reload nginx.service</p>
</blockquote>
</div></template>


