import { defineConfig } from 'vitepress'
import mdAtts from 'markdown-it-attrs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "万华 VEI 系统",
  description: "万华 VEI 供应商系统接入手册",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '文档', link: '/README' }
    ],

    sidebar: [
      {
        text: '概览',
        link: '/README'
      },
      {
        text: '业务指南',
        collapsed: false
      },
      {
        text: '技术指南',
        collapsed: false,
        items: [
          { text: '引言', link: '/technology/solution' },
          { text: '单机版', link: '/technology/offline' },
          { text: '接口规范', link: '/technology/solution' },
          { text: '技术文档', link: '/technology/technology' },
          { text: '接口清单', link: '/technology/interfaces' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config(md) {
      md.use(mdAtts)
    }
  }
})
