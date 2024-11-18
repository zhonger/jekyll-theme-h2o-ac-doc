# Site Config

Site config is defined in `_config.yml` defaultly, which includes all necessary site configs. You just need to define any site config as you need in your `_config.yml`. Here are all supported settings (please refer to seperated description for more details):

```yaml
#### The information for the website, which is important for SEO
title: 'My Blog'    # The site name
description: 'Powered by jekyll and jekyll-theme-h2o-ac.' # The site description
keyword: 'blog, tech'    # The keywords
url: 'https://jekyll-theme-h2o-ac.com'    # The site domain
baseurl: ''     # Optional, only when you want to deploy in a sub directory
favicon: '/favicon.ico'    # The favicon icon. It can be a external url.


#### The information for blog owner
author: 'zhonger'     # Author name
nickname: 'zhonger'   # Nickname
bio: 'Developer & Matainer'   # One sentence to describe you
avatar: '/assets/img/profile.webp'   # The avatar. It can be a external url.
sns:   # Colorful social icon. Defaults to None.
  google-scholar: 'https://scholar.google.com/'        # Google Scholear
  researchgate: 'https://www.research.net/profile/'    # ResearchGate
  ORCID: 'https://orcid.org/'                          # ORCID
  github: 'https://github.com/zhonger'                 # Github
  linkedin: 'https://www.linkedin.com/in/'             # LinkedIn
  segmentfault: 'https://segmentfault.com/u/'          # SegmentFault
  email: 'i@jekyll-theme-h2o-ac.com'   # Email
  weibo: 'https://weibo.com/username'  # Weibo
  zhihu: 'https://zhihu.com'           # Zhihu
  twitter: 'https://twitter.com'       # Twitter
  instagram: 'https://instagram.com'   # Instagram
  juejin: 'https://juejin.com'         # Juejin
  douban: 'https://douban.com'         # Douban
  facebook: 'https://facebook.com'     # Facebook
  dribble: 'https://dribble.com'       # Dribble
  uicn: 'https://www.ui.cn'            # UI China
  jianshu: 'https://jianshu.com'       # Jianshu
  medium: 'https://medium.com'         # Medium


#### The information for H2O-ac theme
version: 1.5.0          # The version. It's better to use the default in RubyGems.
theme-color: default    # The color scheme, blue(default）and pink.
postPatters: 'circuitBoard' 
# The pattern of the cover, only working when undefined cover
# Supporting circuitBoard，overlappingCircles，food，
#            glamorous，ticTacToe，seaOfClouds
nightMode: false        # Enable Night mode or not. Defaults to false.
tos: /tos.html          # The link of terms of services
permalink: /:categories/:title.html  # The rule to generate url for posts
mathjax: true   # Enable MathJax or not. Defaults to true.
RSS: true       # Enable RSS generation or not (robots.txt and sitemap.xml)
timezone: Asia/Tokyo  # The timezone. Defaults to Asia/Tokyo
formats:    # Time format
  time: 0   # 0 -- 2022-04-29  1 -- 29 Apr 2022  2 -- 2022年4月29日
##### The head menu (navigation), following the format of "key: value"
nav:                    
  home: '/'               
  blog: '/blog/index.html'
  archives: '/archives.html'
  tags: '/tags.html'
  about:
    RSS: '/feed.xml'
##### The sidebar
links: # The links in sidebar, following the format of "key: value".
  'Mr Li': 'https://lisz.me'
calendar: true  # Enable post calendar or not (in the sidebar and archives)
recommend-tags: true           # Show tags or not
recommend-condition-size: 12   # The maximum of showing tags
##### The footer
footer:
  since: 2015    # The year to start the site
alivetime: true  # Enable alive time or not
alivestart: "12/23/2021" # The date to start the site
supports: # The badges for sponsors
  upyun: true              # Upyun
  webify: false            # Tencent Cloud Webify
badges:  # Other badges
  netlify: true            # Netlify
  vercel: true             # Vercel
  cloudflare: true         # Cloudfalre
  foreverblog: true        # Foreverblog
  wormhole: true           # Wormhole
  travelling: true         # Travelling
  notbyAI: true            # NotByAI
cclicense: true  # Using Creative Commons to share posts or not
beian: '沪ICP备xxxxxxxx号'  # ICP beian
moe_beian: ''              # MOE beian
##### Internationalization
languages: ['zh-Hans', 'zh-Hant', 'en', 'ja']  # The list for languages
default_lang: 'zh-Hans'  # Default language
#### The latest updating time
github:
  enabled: true                       # Enable or not
  owner: zhonger                      # Github namespace
  repository: jekyll-theme-h2o-ac     # The project name
toc: true  # Enable table of contents (outline) or not
social-share: true      # Enable social share or not
social-share-items: ['wechat', 'weibo', 'douban', 'twitter'] # Social share list
#### Markdown
markdown: kramdown    # Markdown syntax parser
kramdown:             # Markdown syntax parser setting
  input: GFM
highlighter: rouge    # The parser for code highlight
prism:                # The setting for Prism theme
  theme: one-light    # The Prism theme
  line_numbers: true  # Enable line number or not
mermaid: true         # Enable mermaid for flow or not.
extlinks:             # Internal or external URL
  attributes: {rel: nofollow, target: _blank, class: extlinks}  # external URL settings
  rel_exclude: ['host1.com', 'host2.net']  # Internal URL domains
premonition:    # Supportingnote, info, warning, error and citation.
  default:      # Default settings are enough.
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

#### Functions
webpusher: '{GIVEN WEBPUSHER ID}'  # Notification feed
##### PWA, progressive web app
pwa:
  color: '#81BBFF'      # pwa theme color
  short_name: 'h2o-ac'  # The application name
##### Search
search: true    # Enable search
search_type: docsearch   # Defaults to simple local search. DocSearch can be used after v1.3.2
docsearch:                     # The settings for DocSearch
  appId: '{GIVEN APPID}'       # The application ID of DocSearch
  apiKey: '{GIVEN API KEY}'    # The application Key of DocSearch
  indexName: 'indexName'       # The index namespace
#### Comments
comments:
  disqus: true   # Enable Disqus or not
  disqus_url: 'https://h2o-ac.disqus.com/embed.js'  # Disqus URL
  waline: true   # Enable Waline or not
  waline_url: 'https://h2o-ac-waline.deta.dev/'     # Waline URL
  waline_reaction: true  # Enable Waline reaction. The following is localized.
  waline_locale: "{reaction0: '赞一个', reaction1: '踩一下', reaction2: '有点酷', reaction3: '看不懂', reaction4: '啥玩意', reaction5: '想睡觉'}"
  artalk: false  # Enable Artalk or not
  artalk_url: 'https://artalk.lisz.top'  # Artalk URL
  artalk_name: 'h2o-ac'  # Artalk project name
  artalk_uaBadge: false  # Show UserAgent or not
  utterances: false  # Enable Utterances or not
  utterances_url: 'https://utteranc.es/client.js'  # Utterances URL
  utterances_repo: 'zhonger/utterances-comments'  # Github repository
  giscus: false  # Enable Giscus or not
  giscus_url: 'https://giscus.app/client.js'  # Giscus URL
  giscus_repo: 'zhonger/giscus-comments'  # Github repository
  giscus_repo_id: 'R_kgDONLt80A'  # repository id，please refer to https://giscus.app
  giscus_category_id: 'DIC_kwDONLt80M4CkDnG'  # category id，please refer to https://giscus.app
  giscus_lang: 'zh-CN'  # Giscus localization
  twikoo: false  # Enable Twikoo or not
  twikoo_url: 'https://twikoo.lisz.top'  # Twikoo URL
  # twikoo_region: 'ap-shanghai'  # Cloud zone, only when Tencent severless is used.
  twikoo_lang: 'zh-CN'  # Twikoo localization
#### Vistor analytic
cnzz:  '111111111'                   # CNZZ
busuanzi: true                       # Busuanzi
google_analytics: 'UA-111111111-1'   # Google Analytic
google_search: '{GIVEN LONG STRING}' # Google Search Console
umami:                               # Umami
  status: true
  id: '{Umami ID}'
  js: 'https://umami.jekyll-theme-h2o-ac.com/umami.js'
shynet: false                                 # Shynet
shynet_url: ''
plausible: false                              # Plausible
plausible_domain: 'example.com'
plausible_url: ''
# plausible_js: ''                            # Cutomized js for Plausible
fathom: false                                 # Fathom
fathom_id: ''
ackee: false                                  # Ackee
ackee_url: ''
ackee_id: ''
# ackee_js: ''                                # Customized js for Ackee
matomo: false                                 # Matomo
matomo_url: ''
matomo_id: ''
```