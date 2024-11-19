import comp from "/Users/wangjun/code/Mine/vuepress-starter/docs/.vuepress/.temp/pages/python/use.html.vue"
const data = JSON.parse("{\"path\":\"/python/use.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"数组\",\"slug\":\"数组\",\"link\":\"#数组\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"python/use.md\"}")
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
