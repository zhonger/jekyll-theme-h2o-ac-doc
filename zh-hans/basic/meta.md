# 页面配置

每一个页面（文章页或单独页面）都需要定义元信息，有如下常用配置：

| 配置名 | 是否必须 | 描述 |
| :--: | :--: | :-- |
| `layout` | 是 | 模板，可以为 `post`、`page` 等其他各种特定页面模板。 |
| `title` | 是 | 文章或页面标题，可以是任意内容。 |
| `subtitle` | 否 | 文章或页面副标题，建议使用。 |
| `date` | 是 | 建议使用标准格式，如 `2024-05-22 14:34:24 +0800`。 |
| `categories` | 否 | 类别，仅适用于文章页，会被用于生成多层级目录。 |
| `author` | 否 | 作者名，默认为系统配置中的作者。 |
| `cover` | 否 | 封面图地址 |
| `cover_author` | 否 | 封面图作者信息 |
| `cover_author_link` | 否 | 封面图作者链接 |
| `tags` | 否 | 标签，可以是任意多个。 |
| `pin` | 否 | 是否置顶，`true` （是）或 `false`（否）。 |
| `submenu` | 否 | 子目录，适用于页面集合，需提前在 `_data/collections.yml` 中定义。 |
| `comments` | 否 | 评论系统，适用于单独页面或覆盖全局配置。 |

如下为一个示例文件 `2021-12-22-new-theme-h2o-ac.md`：

```yaml
---
layout: post
title: 'H2O-ac theme for Jekyll'
subtitle: '基于或许是最漂亮的 Jekyll 主题 H2O 的学术版'
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
- 主题 
- 前端开发 
- 学术 
- 运维
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

::: tip 提示
**文章页**（如 `2021-12-22-new-theme-h2o-ac.md` 文件）放在 `_posts` 目录内，模版为 `post`，自动根据文件名和元信息生成链接，也可以通过 `permalink` 自定义地址；**单独页面**（如 `archives.md`）放在 `pages` 或其他与已有目录不重复的目录内，模板为 `page` 或其他特定页面模板，需要自定义地址 `permalink`。
:::

在 `_posts` 目录中，可以**根据需要任意创建多层级目录**来有效管理文章源文件，这不会影响文章页最终的自动生成链接。文章页的自动页生成链接仅与**文件名**和 `categories` 配置有关。上述示例对应的自动生成链接为 `/tech/new-theme-h2o-ac.html`。如果 `categories` 为两个 `tech` 和 `webmaster`，则自动生成链接为 `/tech/webmaster/new-theme-h2o-ac.html`。

