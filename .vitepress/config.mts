import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "H2O-ac",
  description: "Documentation site for H2O-ac jekyll theme",
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Docs', link: '/intro/' },
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'Begining', link: '/intro/' },
              { text: 'Files Structure', link: '/intro/structure' },
              { text: 'How to Contribute', link: '/intro/contribution' },
              { text: 'Quick Start', link: '/guide/quickstart' },
            ]
          },
          {
            text: 'Markdown',
            items: [
              { text: 'Basic', link: '/markdown/basic-grammars' },
              { text: 'Code', link: '/markdown/code' },
              { text: 'Gallery', link: '/markdown/gallery' },
              { text: 'Flow', link: '/markdown/mermaid' },
              { text: 'Meta Data', link: '/markdown/meta' },
            ]
          },
          {
            text: 'More features',
            items: [
              { text: 'International', link: '/features/i18n' },
              { text: 'Visitor Analytic', link: '/features/analytic' },
              { text: 'Comment', link: '/features/comment' },
              { text: 'Search', link: '/features/search' },
              { text: 'Icons', link: '/features/icons' },
              { text: 'PWA', link: '/features/pwa' },
            ]
          },
        ],
      }
    },
    "zh-hans": {
      label: '简体中文',
      lang: 'zh-hans',
      link: '/zh-hans/',
      themeConfig: {
        nav: [
          { text: '文档', link: '/zh-hans/intro/' },
        ],
        sidebar: [
          {
            text: '简介',
            items: [
              { text: '缘起', link: '/zh-hans/intro/' },
              { text: '文件结构', link: '/zh-hans/intro/structure' },
              { text: '如何贡献', link: '/zh-hans/intro/contribution' },
              { text: '快速上手', link: '/zh-hans/intro/quickstart' },
              { text: '更新日志', link: '/zh-hans/intro/changelog' },
            ]
          },
          {
            text: 'Markdown',
            items: [
              { text: '基本语法', link: '/zh-hans/markdown/basic-grammars' },
              { text: '代码', link: '/zh-hans/markdown/code' },
              { text: '图库', link: '/zh-hans/markdown/gallery' },
              { text: '流程图', link: '/zh-hans/markdown/mermaid' },
              { text: '元信息', link: '/zh-hans/markdown/meta' },
            ]
          },
          {
            text: '更多特性',
            items: [
              { text: '多语言支持', link: '/zh-hans/features/i18n' },
              { text: '访问统计', link: '/zh-hans/features/analytic' },
              { text: '评论', link: '/zh-hans/features/comment' },
              { text: '搜索', link: '/zh-hans/features/search' },
              { text: '图标', link: '/zh-hans/features/icons' },
              { text: 'PWA', link: '/zh-hans/features/pwa' },
            ]
          },
        ],
        docFooter: {
          prev: "上一页",
          next: '下一页',
        },
        editLink: {
          pattern: 'https://github.com/zhonger/jekyll-theme-h2o-ac-doc/:path',
          text: '编辑此页',
        },
        outlineTitle: '此页面目录',
      }
    }
  },
  lastUpdated: true,
  cleanUrls: false,
  markdown: {
    math: true
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/static/logo.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/static/logo.svg', width: 24, height: 24 },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhonger/jekyll-theme-h2o-ac' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © zhonger'
    },
    editLink: {
      pattern: 'https://github.com/zhonger/jekyll-theme-h2o-ac-doc/:path'
    },
  },
  rewrites: {
    'en/(.*)': '(.*)',
  }
})
