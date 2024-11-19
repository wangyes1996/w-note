export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"repo\":\"wangyes1996\",\"repoLabel\":\"点亮⭐不迷路\",\"editLink\":true,\"docsDir\":\"docs\",\"editLinkText\":\"为该章节纠错\",\"lastUpdated\":true,\"navbar\":[{\"text\":\"🙋‍♂️ 一起成长\",\"link\":\"/me\"}],\"sidebar\":[{\"text\":\"前端开发\",\"collapsible\":true,\"children\":[{\"text\":\"工具函数\",\"link\":\"/frontend/Functions\"}]},{\"text\":\"Python\",\"collapsible\":true,\"children\":[{\"text\":\"安装\",\"link\":\"/python/install\"},{\"text\":\"语法\",\"link\":\"/python/use\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
