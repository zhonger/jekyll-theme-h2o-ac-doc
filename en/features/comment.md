# Comment

Frome <Badge type="tip" text="v1.4.0" />, `H2O-ac` supports serveral comment systems, including [Disqus](https://disqus.com/), [Waline](https://waline.js.org/), [Artalk](https://artalk.js.org/), [Utterances](https://utterances.es/), [Giscus](https://giscus.app/) and [Twikoo](https://twikoo.js.org/).

## Control logic

It's nothing for readers to have more than 2 comment systems at the same time, which may confuse readers. So `H2O-ac` only supports **2 comment systems at the same time**. In <Badge type="tip" text="v1.4.0" />, the code and control logic have been refactored following the rules below:

- The control configs for comment systems have 2 kinds: **site config** (`site.comments`, the `comments` in `_config.yaml`) and **page config** (`page.comments`, the `comments` in meta information of posts or pages).
- The site config only works in **posts** (the pages based on `post` template), while doesn't work for **separated pages** (the pages based on `page` template).
- If the `comments` has been defined in meta information of posts, the posts will use **page config firstly**. For separated pages, only the `comments` in meta information works. The final results for posts are shown in the below table.
- Only the first two comment systems mostly will be shown according to the order designed in the code, even more than two comment systems are enabled. **The priority of comment systems are**: `Disqus > Waline > Artalk > Utterances > Giscus > Twikoo`.
- All other information of comment systems should be defined in `_config.yaml`。

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

## Site config

Here are the settings of comment systems in `_config.yaml`:

```yaml
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
```

Here is the result of enabling `Disqus` and `Waline`:

![O9ZjOp.webp](/imgs/O9ZjOp.webp)

## Page config

Because the site config is only used in posts, the separated should define the enable info in meta information as follows:

```yaml
comments:
  disqus: false
  waline: true
  artalk: true
  utterances: false
  giscus: true
  twikoo: false
```

As above, even `Giscus` is also enabled in the page, the page will only show `Waline` and `Artalk` comment systems because of the order.

:::warning
The order of comment systems in `comments` will not affect the priority, which is fixed.
:::
