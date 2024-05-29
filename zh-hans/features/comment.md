# 评论

目前 `H2O-ac` 支持 [Disqus](https://disqus.com/) 和 [Waline](https://waline.js.org/) 两款评论系统，后续将继续增加包括 [Artalk](https://artalk.js.org/) 在内的其他评论系统，更多信息请查看 [v1.4.0 plan](https://github.com/zhonger/jekyll-theme-H2O-ac/issues/11)。

以下为具体配置信息：

```yaml
comments:
  disqus: true   # 是否开启 Disqus 评论
  disqus_url: 'https://h2o-ac.disqus.com/embed.js'  # Disqus 链接
  waline: true   # 是否开启 Waline 评论
  waline_url: 'https://h2o-ac-waline.deta.dev/'     # Waline 链接
  waline_reaction: true  # 是否开启 Waline 表情反馈，以下为自定义本地化配置。
  waline_locale: "{reaction0: '赞一个', reaction1: '踩一下', reaction2: '有点酷', reaction3: '看不懂', reaction4: '啥玩意', reaction5: '想睡觉'}"
```

![O9ZjOp.webp](/imgs/O9ZjOp.webp)

评论的全局配置启用仅适用于文章页，单独页面启用需要在元信息中添加如下配置：

```yaml
comments:
  waline: true
  disqus: false
```

::: warning 提示
单独页面的启用配置可以与全局配置不一致，像上面一样的单独页面仅启用了 Waline 评论，而文章页面启用了 Disqus 和 Waline 评论。如果全局配置关闭了所有评论，而单独页面开启了，这种情况下**请务必确保其他全局配置信息完整**。当然也可以在全局配置开启时，通过元信息配置关闭某篇文章的评论。
:::
