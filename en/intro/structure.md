# Files Structure

The files structure of `H2O-ac` is shown in the following:

```bash
.
├── _data
├── _includes
├── _layouts
├── _posts
├── assets
├── dev
├── pages
├── .gitignore
├── .tool-versions
├── .vercelignore
├── CNAME
├── Gemfile
├── LICENSE
├── README.md
├── _config.yml
├── _config_production.yml
├── favicon.ico
├── jekyll-theme-h2o-ac.gemspec
├── package.json
├── webpack.config.js
└── webpushr-sw.js
```

Here are the corresponding descriptions:

| Name | Description |
| --:  | :--- |
| `_layouts` | Including `page`, `blog`, `archives`, `categories`, `post`, `tags`, `cv` and other templates. |
| `_includes` | Including `head`, `footer`, `paginate`, `analytics` and other blocks for the pages or plugins. |
| `_posts` | The directory for posts. The post name is like `2023-10-19-example-article.md`. The language sub directoies can be created if you write posts in different languages. |
| `_data` | The directory for data, including `links.yml` (the friends data), `cv.yml` (the data for CV), and `locales` for internationalization. |
| `dev` | The source code of CSS and JS, using `webpack` to automatically build CSS and JS for the production and save into `assets` directory. |
| `pages` | The directory for pages, including all basic pages and necessary files. |
| `assets` | The directory for static files in the production mode, including images, CSS, JS and others. |
| `.gitignore` | The file or directory list to ignore by git tracking |
| `.tool-version` | The requirement for `ASDF` tool chain |
| `.vercelignore` | The file or directory list to ignore by vercel when deploying |
| `CNAME` | The domain used for Github Pages |
| `Gemfile` | The requirements for Ruby |
| `LICENSE` | The open source license file |
| `README.md` | The description file for the project |
| `_config.yml` | The default config file, including all basic settings needed. |
| `_config_production.yml` | The config file for the production and the customization, overriding the default settings. |
| `favicon.ico` | The favicon in the browser |
| `jekyll-theme-h2o-ac.gemspec` | The definition of Gem library (package) for RubyGems |
| `package.json` | The requirement for `NodeJS` |
| `webpack.config.js` | The config file for `webpack` tool |
| `webpushr-sw.js` | Necessary file for notification feed |
