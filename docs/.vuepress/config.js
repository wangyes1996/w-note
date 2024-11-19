import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    repo: "wangyes1996",
    repoLabel: "点亮⭐不迷路",
    editLink: true,
    docsDir: "docs",
    editLinkText: "为该章节纠错",
    lastUpdated: true,
    
    navbar: [
      {
        text: "🙋‍♂️ 一起成长",
        link: "/me"
      }
    ],

    sidebar: [
      {
        text: '前端开发',
        collapsible: true,
        children: [
          {
            text: '工具函数',
            link: '/frontend/Functions',
          },
          // 如果frontend文件夹下还有其他.md文件，按照相同格式添加
        ]
      },
      {
        text: 'Python',
        collapsible: true,
        children: [
          // 这里需要您提供 python 文件夹下的具体文件
          {
            text: '安装',
            link: '/python/install',
          },
          {
            text: '语法',
            link: '/python/use',
          },
        ]
      }
    ]
  }),

  bundler: viteBundler(),
})
