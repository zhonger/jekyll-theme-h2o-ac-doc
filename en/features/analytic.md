# Visitor Analytic

From <Badge type="tip" text="v1.5.0" />, `H2O-ac` supports serveral visitor analytic tools, including [Busuanzi](https://busuanzi.ibruce.info/)（self-hosted busuanzi is also ok）, [Umami](https://umami.is/), Google Analytic, CNZZ, Google Search Console Verification, [Shynet](https://github.com/milesmcc/shynet), [Plausible](https://plausible.io/), [Fathom](https://usefathom.com/), [Ackee](https://ackee.electerious.com/) and [Matomo](https://matomo.org/).

Here are the configs for them (they can be used at the same time):

```yaml
cnzz:  '111111111'                            # CNZZ Analytic
busuanzi: true                                # Busuanzi Analytic
busuanzi_url: 'https://busuanzi.lisz.top'     # Cutomized Busuanzi URL
google_analytics: 'UA-111111111-1'            # Google Analytic
google_search: '{GIVEN LONG STRING}'          # Google Search Console Verification
umami:                                        # Umami Analytic
  status: true
  id: '{Umami ID}'
  js: 'https://umami.jekyll-theme-h2o-ac.com/umami.js'
shynet: false                                 # Shynet Analytic
shynet_url: ''
plausible: false                              # Plausible Analytic
plausible_domain: 'example.com'
plausible_url: ''
# plausible_js: ''                            # Customized Plausible JS file
fathom: false                                 # Fathom Analytic
fathom_id: ''
ackee: false                                  # Ackee Analytic
ackee_url: ''
ackee_id: ''
# ackee_js: ''                                # Customized Ackee JS file
matomo: false                                 # Matomo Analytic
matomo_url: ''
matomo_id: ''
```

:::tip
If you want to host busuanzi by yourself, it's recommended to use [self-hosted busuanzi](https://busuanzi.apifox.cn/). For the depolyment of other visitor analytic tools, please refer to their homepages.
:::
