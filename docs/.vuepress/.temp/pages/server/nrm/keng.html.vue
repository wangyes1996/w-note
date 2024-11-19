<template><div><h2 id="现象" tabindex="-1"><a class="header-anchor" href="#现象"><span>现象：.</span></a></h2>
<p>最近几个版本中，使用npm全局安装nrm之后，nrm无法正常使用
报错信息</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">Error <span class="token punctuation">[</span>ERR_REQUIRE_ESM<span class="token punctuation">]</span>: require<span class="token punctuation">(</span><span class="token punctuation">)</span> of ES Module D:<span class="token punctuation">\</span>npm<span class="token punctuation">\</span>node_modules<span class="token punctuation">\</span>nrm<span class="token punctuation">\</span>node_modules<span class="token punctuation">\</span>open<span class="token punctuation">\</span>index.js from D:<span class="token punctuation">\</span>npm<span class="token punctuation">\</span>node_modules<span class="token punctuation">\</span>nrm<span class="token punctuation">\</span>cli.js not supported.</span>
<span class="line">Instead change the require of index.js <span class="token keyword">in</span> D:<span class="token punctuation">\</span>npm<span class="token punctuation">\</span>node_modules<span class="token punctuation">\</span>nrm<span class="token punctuation">\</span>cli.js to a dynamic import<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">which</span> is available <span class="token keyword">in</span> all CommonJS modules.</span>
<span class="line">at Object. <span class="token punctuation">(</span>D:<span class="token punctuation">\</span>npm<span class="token punctuation">\</span>node_modules<span class="token punctuation">\</span>nrm<span class="token punctuation">\</span>cli.js:9:14<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">code: ‘ERR_REQUIRE_ESM’</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因"><span>原因：</span></a></h2>
<p>应该使用 open 的 CommonJs规范的包 ，现在 open v9.0.0 是 ES Module 版本的包</p>
<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法：</span></a></h2>
<p>npm install -g nrm open@8.4.2 --save --registry=https://registry.npm.taobao.org</p>
</div></template>


