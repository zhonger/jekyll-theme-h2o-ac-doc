# 访问统计

自 <Badge type="tip" text="v1.5.0" /> 版本之后，本主题支持 [不蒜子](https://busuanzi.ibruce.info/)（busuanzi，可自托管）、[Umami](https://umami.is/)、谷歌统计、站长统计（CNZZ）、谷歌搜索验证、[Shynet](https://github.com/milesmcc/shynet)、[Plausible](https://plausible.io/)、[Fathom](https://usefathom.com/)、[Ackee](https://ackee.electerious.com/) 和 [Matomo](https://matomo.org/) 在内的多款访问统计。

以下为各种启用配置（互不影响，可同时启用）：

```yaml
cnzz:  '111111111'                            # CNZZ 站长统计
busuanzi: true                                # Busuanzi 不蒜子统计
busuanzi_url: 'https://busuanzi.lisz.top'     # 使用自托管 Busuanzi 时需定义
google_analytics: 'UA-111111111-1'            # 谷歌统计分析
google_search: '{GIVEN LONG STRING}'          # 谷歌搜索验证所有权
umami:                                        # Umami 统计
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

:::tip 提示
如果想要自行搭建不蒜子，推荐使用 [自建不蒜子](https://busuanzi.apifox.cn/)。其他访问统计自建请查看各项目的官方文档。
:::
