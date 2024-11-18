# PWA 

PWA (Progressive Web App) is implemented by `sw.js` and `mainfest.json` two files. Please put these two files in `pages` to enable PWA。

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

PWA has two settings: theme color and application name as follows:

```yaml
pwa:
  color: '#81BBFF'      # Theme color
  short_name: 'h2o-ac'  # Application short name or fullname
```

Besides thess, please put the necessary icon files in `/assets/img/touch` as below:

- `android-chrome-192-192.png`
- `android-chrome-512-512.png`
- `android-chrome-maskable-192-192.png`
- `android-chrome-maskable-512-512.png` 
- `apple-touch-icon.png`。

It is recommended to use [IconGen](https://icongen.pages.dev/) for making them.
