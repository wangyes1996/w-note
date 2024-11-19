export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/wangjun/code/Mine/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"为什么会有这个博客？"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/wangjun/code/Mine/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/frontend/Functions.html", { loader: () => import(/* webpackChunkName: "frontend_Functions.html" */"/Users/wangjun/code/Mine/vuepress-starter/docs/.vuepress/.temp/pages/frontend/Functions.html.js"), meta: {"title":"指南"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/wangjun/code/Mine/vuepress-starter/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":""} }],
  ["/server/nginx/use.html", { loader: () => import(/* webpackChunkName: "server_nginx_use.html" */"/Users/wangjun/code/Mine/vuepress-starter/docs/.vuepress/.temp/pages/server/nginx/use.html.js"), meta: {"title":""} }],
  ["/server/nrm/keng.html", { loader: () => import(/* webpackChunkName: "server_nrm_keng.html" */"/Users/wangjun/code/Mine/vuepress-starter/docs/.vuepress/.temp/pages/server/nrm/keng.html.js"), meta: {"title":""} }],
  ["/server/nrm/use.html", { loader: () => import(/* webpackChunkName: "server_nrm_use.html" */"/Users/wangjun/code/Mine/vuepress-starter/docs/.vuepress/.temp/pages/server/nrm/use.html.js"), meta: {"title":""} }],
  ["/python/install.html", { loader: () => import(/* webpackChunkName: "python_install.html" */"/Users/wangjun/code/Mine/vuepress-starter/docs/.vuepress/.temp/pages/python/install.html.js"), meta: {"title":""} }],
  ["/python/use.html", { loader: () => import(/* webpackChunkName: "python_use.html" */"/Users/wangjun/code/Mine/vuepress-starter/docs/.vuepress/.temp/pages/python/use.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/wangjun/code/Mine/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
