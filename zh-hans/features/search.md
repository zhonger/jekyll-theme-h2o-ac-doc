# 搜索

`H2O-ac` 内置了简单搜索功能，无须任何其他第三方依赖实现，在 `pages` 目录下新建 `search.md` 文件以提供搜索所需的数据。

```yaml
---
layout: search
permalink: /assets/search.json
---
```

除此之外，还需在全局配置中开启搜索功能。

```yaml
search: true
```

![N64GPt.webp](/imgs/N64GPt.webp)

::: warning 提示
简单搜索的搜索栏位于侧边栏的最底部。
:::

当然这种简单搜索比较适合内容较少的情况，当内容较多时搜索效率可能会受到限制。因此后续将继续增加包括 [typesense](https://typesense.org/) 在内的其他搜索方式，具体请查看 [v1.6.0 plan](https://github.com/zhonger/jekyll-theme-H2O-ac/issues/23)。

自 <Badge type="tip" text="v1.3.2" /> 版本起，开始支持 [DocSearch](https://docsearch.algolia.com/)。如果是技术博客可以申请 DocSearch 的免费项目，获得批准后如下设置后即可启用：

```yaml
search: true    # 是否启用搜索
search_type: docsearch   # 默认为 default 即简单搜索，自 v1.3.2 后可用 DocSearch 搜索。
docsearch:                     # DocSearch 搜索配置节
  appId: '{GIVEN APPID}'       # 获取的应用 ID
  apiKey: '{GIVEN API KEY}'    # 获取的应用 Key
  indexName: 'indexName'       # 获取的索引空间名
```

![LyXFuh.webp](/imgs/LyXFuh.webp)

::: warning 提示
DocSearch 搜索的搜索栏桌面端时位于顶部最右侧、移动端时位于顶部右侧的最左侧，可点击使用或使用快捷键 `⌘ + K`。
:::
