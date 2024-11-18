# Page Config

Every post or individual page can define the configs in the meta block. The supported configs are as follows:

| Name | Necessary | Description |
| :--: | :--: | :-- |
| `layout` | Yes | The template, which could be `post`、`page` or other supported templates. |
| `title` | Yes | The title of the post or the page, which could be anything. |
| `subtitle` | No | The subtitle of the post or the page, which is recommended to use. |
| `date` | Yes | The first published date, suggesting to use the standard format such as `2024-05-22 14:34:24 +0800`. |
| `categories` | No | The categories, which are only available for the posts. The url will be multiple levels if more than one category are defined. |
| `author` | No | The author of posts. Defaults to the author in site config. |
| `cover` | No | The url of cover |
| `cover_author` | No | The cover author name |
| `cover_author_link` | No | The link of cover author |
| `tags` | No | The tags, which could be one or more. |
| `pin` | No | Pinned to the top or not，`true` (Yes) or `false` (No) |
| `submenu` | No | The submenu for the collection, whose data should be defined in `_data/collections.yml` firstly. |
| `comments` | No | For comment systems. It can overide the site config. |

Here is an example of page config in `2021-12-22-new-theme-h2o-ac.md`：

```yaml
---
layout: post
title: 'H2O-ac theme for Jekyll'
subtitle: 'Based on H2O which may be one of the most beautiful theme'
date: 2021-12-22 19:50:00 +0800
categories: tech
author: zhonger
cover: 'https://i.lisz.top/cover/ao6Hd2.webp'
cover_author: 'Paris Hour'
cover_author_link: 'https://unsplash.com/@paris168'
tags: 
- jekyll 
- theme 
- blog 
- ac 
- develop 
pin: true
submenu: 'begin'
comments:
  disqus: false
  waline: false
  artalk: false
  utterances: false
  giscus: false
  twikoo: false
---
```

::: tip
**Posts** (such as `2021-12-22-new-theme-h2o-ac.md`) are put in `_posts` directory，and the template is `post`. The url of this post will be automatically generated according to the filename and meta information. Of course, it also can be defined by `permalink` in the page config.

**Pages** (such as `archives.md`) are put in `pages` directory or other directories, and the template is `page` or other specific page template. It also can use `permalink` in the page config to define the url.
:::

In `_posts` directory, you can **create any layers of directories** to manage the source files for posts efficiently. It will not affect the final generated url. The automatic generation of the url is only related to **filename** and `categories` config. For example, the url of the above file is `/tech/new-theme-h2o-ac.html`. If changing `categories` to `tech` and `webmaster`, the url will be `/tech/webmaster/new-theme-h2o-ac.html`.
