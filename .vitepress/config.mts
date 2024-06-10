import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "H2O-ac",
  description: "Documentation site for H2O-ac jekyll theme",
  locales: {
    root: {
      // label: 'English',
      // lang: 'en-US',
      // themeConfig: {
      //   nav: [
      //     { text: 'Docs', link: '/intro/' },
      //   ],
      //   sidebar: [
      //     {
      //       text: 'Introduction',
      //       items: [
      //         { text: 'Begining', link: '/intro/' },
      //         { text: 'Files Structure', link: '/intro/structure' },
      //         { text: 'How to Contribute', link: '/intro/contribution' },
      //         { text: 'Quick Start', link: '/guide/quickstart' },
      //       ]
      //     },
      //     {
      //       text: 'Markdown',
      //       items: [
      //         { text: 'Basic', link: '/basic/basic-grammars' },
      //         { text: 'Code', link: '/basic/code' },
      //         { text: 'Gallery', link: '/basic/gallery' },
      //         { text: 'Flow', link: '/basic/mermaid' },
      //         { text: 'Meta Data', link: '/basic/meta' },
      //       ]
      //     },
      //     {
      //       text: 'More features',
      //       items: [
      //         { text: 'International', link: '/features/i18n' },
      //         { text: 'Visitor Analytic', link: '/features/analytic' },
      //         { text: 'Comment', link: '/features/comment' },
      //         { text: 'Search', link: '/features/search' },
      //         { text: 'Icons', link: '/features/icons' },
      //         { text: 'PWA', link: '/features/pwa' },
      //       ]
      //     },
      //   ],
      // }
    // },
    // "zh-hans": {
      label: '简体中文',
      lang: 'zh-hans',
      link: '/',
      themeConfig: {
        nav: [
          { text: '文档', link: '/intro/' },
        ],
        sidebar: [
          {
            text: '简介',
            items: [
              { text: '缘起', link: '/intro/' },
              { text: '文件结构', link: '/intro/structure' },
              { text: '如何贡献', link: '/intro/contribution' },
              { text: '快速上手', link: '/intro/quickstart' },
              { text: '更新日志', link: '/intro/changelog' },
            ]
          },
          {
            text: '基本使用',
            items: [
              { text: '页面配置', link: '/basic/meta' },
              { text: '全局配置', link: '/basic/config' },
              { text: '基本语法', link: '/basic/markdown' },
              { text: '图库与懒加载', link: '/basic/gallery' },
              { text: '流程图', link: '/basic/mermaid' },
            ]
          },
          {
            text: '更多特性',
            items: [
              { text: '国际化', link: '/features/i18n' },
              { text: '访问统计', link: '/features/analytic' },
              { text: '评论', link: '/features/comment' },
              { text: '搜索', link: '/features/search' },
              { text: '图标', link: '/features/icons' },
              { text: 'PWA', link: '/features/pwa' },
              { text: '简历', link: '/features/cv' },
            ]
          },
        ],
        docFooter: {
          prev: "上一页",
          next: '下一页',
        },
        editLink: {
          pattern: 'https://github.com/zhonger/jekyll-theme-h2o-ac-doc/edit/main/:path',
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
    ['meta', { name: 'google-site-verification', content: 'v729JR7Zs4nX-YvgaPeo3p1ise9vTA-6cMhamSu6N5c'}],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['script', 
      {
        src: 'https://umami.lisz.top/pwiki.js', 
        'data-website-id': 'c02be886-8200-4cc4-90e1-ad34cb46a9df',
      }
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-D8RWF7JLY9' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-D8RWF7JLY9');"
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.svg', width: 24, height: 24 },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhonger/jekyll-theme-h2o-ac' }
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: 'UHC7SEFT5V',
        apiKey: '43306c614372fbe934837f4a3f07451f',
        indexName: 'h2o-ac-lisz',
      }
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
    'zh-hans/(.*)': '(.*)',
  }
})
