# Search

`H2O-ac` supports simple local search without third-party libraries. The only necessary thing is to prepare `search.md` file in `pages` directory for generating searching meta data as follows:

```yaml
---
layout: search
permalink: /assets/search.json
---
```

Besides this, search function should be enabled in site config like the below.

```yaml
search: true
```

![N64GPt.webp](/imgs/N64GPt.webp)

::: warning
The search panel of simple local search will be in the sidebar.
:::

Of course, the simple local search is enough when the contents are not too much. When you have many contents in the website, the efficiency of simple local search may be not good. Therefore, more modern search types will be supported including [typesense](https://typesense.org/) in the future. Pelase refer to [v1.6.0 plan](https://github.com/zhonger/jekyll-theme-H2O-ac/issues/23) for more details.

From <Badge type="tip" text="v1.3.2" />, [DocSearch](https://docsearch.algolia.com/) is also supported. If your website is documentation or technical blog, you can apply DocSearch **for free**. The setting for DocSearch is as follows:

```yaml
search: true    # Enable search or not
search_type: docsearch   # Enable DocSearch. Defaults to 'default' (simple local search)
docsearch:                     # DocSearch settings
  appId: '{GIVEN APPID}'       # APP ID from DocSearch
  apiKey: '{GIVEN API KEY}'    # APP Key from DocSearch
  indexName: 'indexName'       # Index namespace from DocSearch
```

![LyXFuh.webp](/imgs/LyXFuh.webp)

::: warning
The search panel of DocSearch is in the right of head menu. The hot key `⌘ + K` is available。
:::
