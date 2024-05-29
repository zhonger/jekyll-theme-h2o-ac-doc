# 访问统计

`H2O-ac` 目前支持不蒜子（busuanzi）、Umami、谷歌统计、站长统计（CNZZ）以及谷歌搜索验证，后续将增加包括 [Matomo](https://matomo.org/) 在内的多款访问统计，具体请查看 [v1.5.0 plan](https://github.com/zhonger/jekyll-theme-H2O-ac/issues/12)。

以下为各种启用配置（互不影响，可同时启用）：

```yaml
cnzz:  '111111111'                   # CNZZ 站长统计
busuanzi: true                       # Busuanzi 不蒜子统计
google_analytics: 'UA-111111111-1'   # 谷歌统计分析
google_search: '{GIVEN LONG STRING}' # 谷歌搜索验证所有权
umami:                               # Umami 统计
  status: true
  id: '{Umami ID}'
  js: 'https://umami.jekyll-theme-h2o-ac.com/umami.js'
```
