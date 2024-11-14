# 评论

自 <Badge type="tip" text="v1.4.0" /> 版本之后，本主题全面支持包括 [Disqus](https://disqus.com/)、[Waline](https://waline.js.org/)、[Artalk](https://artalk.js.org/)、[Utterances](https://utterances.es/)、[Giscus](https://giscus.app/) 和 [Twikoo](https://twikoo.js.org/) 在内的 6 款评论系统。

## 多评论控制逻辑

考虑到同时显示太多（超过 2 种）的评论系统对于用户来说没有什么意义，甚至还会有选择的负担，目前主题仅支持**最多显示 2 种评论系统**。为此，<Badge type="tip" text="1.4.0" /> 版本也重构了评论系统的代码和业务逻辑，包含以下原则：

- 评论系统分为**全局控制**（`site.comments` 字段，即 `_config.yaml` 文件中的 `comments` 字段）和**页面控制**（`page.comments` 字段，即页面元信息中的 `comments` 字段）。
- 全局控制自动在每个**文章页面**（基于 `post` 模板的页面）生效，不对**单独页面**（基于 `page` 模板的页面）生效。
- 如果在页面的元信息中手动定义 `comments` 字段，文章页面将会**以页面控制信息优先**，单独页面将以页面控制信息为准，对应可见下表。
- 根据评论系统支持代码实现的先后，当有超过两种评论系统开启时，排在前两位的评论系统将会被使用。**评论系统优先级顺序**为：`Disqus > Waline > Artalk > Utterances > Giscus > Twikoo`。
- 所有评论系统除启用以外的其他配置需定义在 `_config.yaml` 文件中。

| site.comments | page.comments | final result |
| :-- | :-- | :-- |
| True | / | True |
| True | True | True |
| True | False | False |
| False | / | False |
| False | True | True |
| False | False | False |
| / | / | False |
| / | True | True |
| / | False | False |

## 全局配置

以下为 `_config.yaml` 文件中的具体配置信息：

```yaml
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
```

下图是同时启用 `Disqus` 和 `Waline` 评论系统时的效果：

![O9ZjOp.webp](/imgs/O9ZjOp.webp)

## 页面配置

评论的全局配置启用仅适用于文章页，单独页面启用需要在元信息中添加如下配置：

```yaml
comments:
  disqus: false
  waline: true
  artalk: true
  utterances: false
  giscus: true
  twikoo: false
```

如上配置即使 `Giscus` 也在页面中启用了，但是由于优先级的原因，该页面将只会显示 `Waline` 和 `Artalk` 评论。

:::warning 小提示
评论系统在 `comments` 字段中配置的前后顺序并不会影响优先级，评论系统的优先级是固定的。
:::
