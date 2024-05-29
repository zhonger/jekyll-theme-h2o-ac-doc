# PWA 

PWA（渐进式网站应用）功能主要是由 `sw.js` 和 `mainfest.json` 两个文件实现的。请将以下两个文件放在 `pages` 目录下启用 PWA。

```yaml
---
layout: manifest
permalink: /manifest.json
---
```

```yaml
---
layout: sw
permalink: /sw.js
---
```

PWA 有两个可自定义配置：主题色和应用名，如下所示。

```yaml
pwa:
  color: '#81BBFF'      # 主题色
  short_name: 'h2o-ac'  # 应用缩写或应用名
```

除此之外，请将 PWA 所需的图标文件放置在 `/assets/img/touch` 目录下，分别为 

- `android-chrome-192-192.png`
- `android-chrome-512-512.png`
- `android-chrome-maskable-192-192.png`
- `android-chrome-maskable-512-512.png` 
- `apple-touch-icon.png`。

推荐使用 [IconGen](https://icongen.pages.dev/) 一键制作。
