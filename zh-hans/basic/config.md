# 全局配置

全局配置采用 `yaml` 文件格式定义在 `_config.yml` 文件中，主题已包含了所有的全局配置默认信息，使用时根据需求定义需修改的信息即可。以下为所有配置，具体详细特性的配置请查看相应页面了解更多：

```yaml
#### 站点信息，对 SEO 比较重要
title: 'My Blog'    # 站点名称
description: 'Powered by jekyll and jekyll-theme-h2o-ac.'   # 站点描述
keyword: 'blog, tech'    # 关键词
url: 'https://jekyll-theme-h2o-ac.com'    # 站点域名
baseurl: ''     # 可选，站点子目录（适用于部署在子目录）
favicon: '/favicon.ico'    # 站点浏览器图标，可以是外部链接


#### 博主信息
author: 'zhonger'     # 作者
nickname: 'zhonger'   # 昵称
bio: 'Developer & Matainer'   # 一句话描述
avatar: '/assets/img/profile.webp'   # 头像，可以是外部链接
sns:   # 彩色社交图标，默认无配置，按需添加。
  google-scholar: 'https://scholar.google.com/'        # 谷歌学术链接
  researchgate: 'https://www.research.net/profile/'    # ResearchGate 链接
  ORCID: 'https://orcid.org/'                          # ORCID 链接
  github: 'https://github.com/zhonger'                 # Github 链接
  linkedin: 'https://www.linkedin.com/in/'             # 领英链接
  segmentfault: 'https://segmentfault.com/u/'          # SegmentFault 链接
  email: 'i@jekyll-theme-h2o-ac.com'   # 邮箱
  weibo: 'https://weibo.com/username'  # 微博链接
  zhihu: 'https://zhihu.com'           # 知乎链接
  twitter: 'https://twitter.com'       # 推特链接
  instagram: 'https://instagram.com'   # Instagram 链接
  juejin: 'https://juejin.com'         # 掘金链接
  douban: 'https://douban.com'         # 豆瓣网链接
  facebook: 'https://facebook.com'     # 脸书链接
  dribble: 'https://dribble.com'       # Dribble 链接
  uicn: 'https://www.ui.cn'            # UI 中国链接
  jianshu: 'https://jianshu.com'       # 简书链接
  medium: 'https://medium.com'         # Medium 链接


#### 主题信息
version: 1.5.0          # 主题版本，无须自行设置，请采用默认配置。
theme-color: default    # 站点主题色，默认（蓝色，default）和粉色（pink）
postPatters: 'circuitBoard' # 页面封面默认模式，仅在未定义封面图时生效。
# 支持 circuitBoard，overlappingCircles，food，
# glamorous，ticTacToe，seaOfClouds 五种。
nightMode: false        # 夜间模式是否默认开启
tos: /tos.html          # 站点服务条款链接
permalink: /:categories/:title.html  # 文章页自动生成规则
mathjax: true   # 是否开启 MathJax 公式支持
RSS: true       # 是否开启 RSS 生成，robots.txt 和 sitemap.xml 文件。
timezone: Asia/Tokyo  # 默认时区
formats:    # 各种格式
  time: 0   # 时间格式，0 -- 2022-04-29  1 -- 29 Apr 2022  2 -- 2022年4月29日
##### 顶部导航栏，键值对定义显示名称与链接，可以是中文名（需使用引号）。
nav:                    
  home: '/'               
  blog: '/blog/index.html'
  archives: '/archives.html'
  tags: '/tags.html'
  about:
    RSS: '/feed.xml'
##### 侧边栏配置
links: # 友情链接（侧边栏），键值对定义显示名称与链接，可以是中文名（需使用引号）。
  'Mr Li': 'https://lisz.me'
calendar: true  # 是否开启文章发表日历（侧边栏与归档页）
recommend-tags: true           # 是否显示推荐便签
recommend-condition-size: 12   # 显示推荐标签数量
##### 底部版权栏
footer:          # 底部信息
  since: 2015    # 站点建站年份，用于显示版权起始时间。
alivetime: true  # 是否开启实时计算站点存活时间（底部）
alivestart: "12/23/2021" # 站点建站年月日，用于实时计算站点存活时间。
supports: # 赞助商徽章
  upyun: true              # 又拍云
  webify: false            # 腾讯云 Webify
badges:  # 其他徽章
  netlify: true            # Netlify
  vercel: true             # Vercel
  cloudflare: true         # Cloudfalre
  foreverblog: true        # Foreverblog
  wormhole: true           # Wormhole
  travelling: true         # Travelling
  notbyAI: true            # NotByAI
cclicense: true  # 是否以 Creative Commons 协议共享文章内容版权
beian: '沪ICP备xxxxxxxx号'  # ICP 备案信息
moe_beian: ''              # MOE 备案信息
##### 国际化
languages: ['zh-Hans', 'zh-Hant', 'en', 'ja']  # 国际化语言支持列表
default_lang: 'zh-Hans'  # 默认语言
#### 文章最近更新时间自动更新
github:
  enabled: true                       # 是否开启
  owner: zhonger                      # Github 命名空间，用户名或组织名
  repository: jekyll-theme-h2o-ac     # 项目名
toc: true  # 是否开启文章页目录导航
social-share: true      # 是否开启社交分享
social-share-items: ['wechat', 'weibo', 'douban', 'twitter'] # 社交分享列表
# 绝大多数社交媒体均支持。考虑到该功能的鸡肋，未来可能会移除。
#### Markdown
markdown: kramdown    # Markdown 语法解析器
kramdown:             # Markdown 语法解析器配置
  input: GFM
highlighter: rouge    # 代码高亮解析器
prism:                # 代码高亮主题配置节
  theme: one-light    # 代码高亮主题，支持所有官方主题
  line_numbers: true  # 是否开启代码行号
mermaid: true         # 是否开启代码流程图支持，可以根据符合 mermaid 语法的代码画图。
extlinks:             # 区分站内链接与站外链接
  attributes: {rel: nofollow, target: _blank, class: extlinks}  # 站外链接配置
  rel_exclude: ['host1.com', 'host2.net']  # 可以被认为是站内链接的多域名配置
premonition:    # 支持五种提示框，note、info、warning、error、citation。
  default:      # 一般采用默认配置即可，无须自定义修改。
    template: '<div class="premonition {{type}}">
          <div class="header">
            <svg class="icon {{type}}" aria-hidden="true">
                <use xlink:href="#icon-{{type}}"></use>
            </svg>
            <div class="title"> {{title}} </div>
          </div>
          <div class="content">
            {{content}}
          </div>
        </div>'
  types:
    citation:
      template: '<div class="premonition {{type}}">
          <div class="header">
            <svg class="icon {{type}}" aria-hidden="true">
                <use xlink:href="#icon-{{type}}"></use>
            </svg>     
          </div>
          <div class="content">
            {{content}}
          </div>
          {% if title %}<div class="ref"> ------ {{title}} </div>{% endif %}
        </div>'
      default_title: ''
    note:
      default_title: 'Note'
    info:
      default_title: 'Info'
    warning:
      default_title: 'Warning'
    error:
      default_title: 'Error'
plugins: [jekyll-paginate-v2, jekyll-feed, jekyll-sitemap, premonition, h2o-ac-jekyll-extlinks]
exclude: ['node_modules', 'dev', 'package.json', 'webpack.config.js', '.gitignore', 'README.md', '*.gemspec', '*.gem']

#### 功能区
webpusher: '{GIVEN WEBPUSHER ID}'  # 动态消息、通知推送，定义时自动开启。
##### PWA，渐进式网站应用
pwa:
  color: '#81BBFF'      # 主题色
  short_name: 'h2o-ac'  # 应用缩写或应用名
##### 搜索功能
search: true    # 是否启用搜索
search_type: docsearch   # 默认为 default 即简单搜索，自 v1.3.2 后可用 DocSearch 搜索。
docsearch:                     # DocSearch 搜索配置节
  appId: '{GIVEN APPID}'       # 获取的应用 ID
  apiKey: '{GIVEN API KEY}'    # 获取的应用 Key
  indexName: 'indexName'       # 获取的索引空间名
#### 评论功能
comments:
  disqus: true   # 是否开启 Disqus 评论
  disqus_url: 'https://h2o-ac.disqus.com/embed.js'  # Disqus 链接
  waline: true   # 是否开启 Waline 评论
  waline_url: 'https://h2o-ac-waline.deta.dev/'     # Waline 链接
  waline_reaction: true  # 是否开启 Waline 表情反馈，以下为自定义本地化配置。
  waline_locale: "{reaction0: '赞一个', reaction1: '踩一下', reaction2: '有点酷', reaction3: '看不懂', reaction4: '啥玩意', reaction5: '想睡觉'}"
  artalk: false  # 是否开启 Artalk 评论
  artalk_url: 'https://artalk.lisz.top'  # Artalk 链接
  artalk_name: 'h2o-ac'  # Artalk 项目名称
  artalk_uaBadge: false  # 是否显示 UserAgent
  utterances: false  # 是否开启 Utterances 评论
  utterances_url: 'https://utteranc.es/client.js'  # Utterances 链接
  utterances_repo: 'zhonger/utterances-comments'  # Github 项目
  giscus: false  # 是否开启 Giscus 评论
  giscus_url: 'https://giscus.app/client.js'  # Giscus 链接
  giscus_repo: 'zhonger/giscus-comments'  # Github 项目
  giscus_repo_id: 'R_kgDONLt80A'  # 项目 id，请使用 https://giscus.app 获得
  giscus_category_id: 'DIC_kwDONLt80M4CkDnG'  # 类别 id，请使用 https://giscus.app 获得
  giscus_lang: 'zh-CN'  # Giscus 本地化配置
  twikoo: false  # 是否开启 Twikoo 评论
  twikoo_url: 'https://twikoo.lisz.top'  # Twikoo 链接
  # twikoo_region: 'ap-shanghai'  # 云区域，当且仅当使用腾讯云函数部署时使用
  twikoo_lang: 'zh-CN'  # Twikoo 本地化配置
#### 站点统计功能
cnzz:  '111111111'                   # CNZZ 站长统计
busuanzi: true                       # Busuanzi 不蒜子统计
google_analytics: 'UA-111111111-1'   # 谷歌统计分析
google_search: '{GIVEN LONG STRING}' # 谷歌搜索验证所有权
umami:                               # Umami 统计
  status: true
  id: '{Umami ID}'
  js: 'https://umami.jekyll-theme-h2o-ac.com/umami.js'
shynet: false                                 # Shynet 统计
shynet_url: ''
plausible: false                              # Plausible 统计
plausible_domain: 'example.com'
plausible_url: ''
# plausible_js: ''                            # 使用自定义 js 文件时定义
fathom: false                                 # Fathom 统计
fathom_id: ''
ackee: false                                  # Ackee 统计
ackee_url: ''
ackee_id: ''
# ackee_js: ''                                # 使用自定义 js 文件时定义
matomo: false                                 # Matomo 统计
matomo_url: ''
matomo_id: ''
```