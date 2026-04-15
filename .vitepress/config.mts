import { defineConfig } from 'vitepress'
import mdAtts from 'markdown-it-attrs'
import mathjax3 from 'markdown-it-mathjax3'

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
        collapsed: false,
        items: [
          { text: '什么是VEI', link: '/business/brief' },
          { text: '运作模式', link: '/business/process' },
          { text: '对接优势', link: '/business/advantages' },
          { text: '规则详解', link: '/business/rules' },
          { text: '奖励机制', link: '/business/incentives' },
          { text: '常见问题', link: '/business/faq' }

        ]
      },
      {
        text: '技术指南',
        collapsed: false,
        items: [
          { text: '引言', link: '/technology/brief' },
          { text: '对接申请', link: '/technology/application' },
          { text: '单机版', link: '/technology/offline' },
          {
            text: '联机版',
            collapsed: true,
            items: [
              { text: '对接规范', link: '/technology/solution' },
              { text: '技术文档', link: '/technology/technology' },
              { text: '接口清单', link: '/technology/interfaces' }
            ]
          },
          { text: '常见问题', link: '/technology/faq' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config(md) {
      md.use(mdAtts);
      md.use(mathjax3);
    }
  }
})
