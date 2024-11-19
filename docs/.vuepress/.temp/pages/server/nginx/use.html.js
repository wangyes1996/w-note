import comp from "/Users/wangjun/code/Mine/vuepress-starter/docs/.vuepress/.temp/pages/server/nginx/use.html.vue"
const data = JSON.parse("{\"path\":\"/server/nginx/use.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]},{\"level\":2,\"title\":\"配置 Nginx 服务\",\"slug\":\"配置-nginx-服务\",\"link\":\"#配置-nginx-服务\",\"children\":[]},{\"level\":2,\"title\":\"配置conf\",\"slug\":\"配置conf\",\"link\":\"#配置conf\",\"children\":[]},{\"level\":2,\"title\":\"使用nginx部署多个前端项目\",\"slug\":\"使用nginx部署多个前端项目\",\"link\":\"#使用nginx部署多个前端项目\",\"children\":[]},{\"level\":2,\"title\":\"坑啊\",\"slug\":\"坑啊\",\"link\":\"#坑啊\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"server/nginx/use.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
