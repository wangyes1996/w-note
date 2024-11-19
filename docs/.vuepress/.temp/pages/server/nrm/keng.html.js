import comp from "/Users/wangjun/code/Mine/vuepress-starter/docs/.vuepress/.temp/pages/server/nrm/keng.html.vue"
const data = JSON.parse("{\"path\":\"/server/nrm/keng.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"现象：.\",\"slug\":\"现象\",\"link\":\"#现象\",\"children\":[]},{\"level\":2,\"title\":\"原因：\",\"slug\":\"原因\",\"link\":\"#原因\",\"children\":[]},{\"level\":2,\"title\":\"解决方法：\",\"slug\":\"解决方法\",\"link\":\"#解决方法\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"server/nrm/keng.md\"}")
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
