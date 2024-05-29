# 文件结构

`H2O-ac` 目前的顶层文件结构如下所示:

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

其中文件目录名及文件名的对应描述如下表所示：

| 目录或文件名 | 描述 |
| --:  | :--- |
| `_layouts` | 包含 `page`, `blog`, `archives`, `categories`, `post`, `tags`, `cv` 等各类模板文件。 |
| `_includes` | 包含 `head`, `footer`, `paginate`, `analytics` 等页面区块文件和插件文件。 |
| `_posts` | 文章目录，放置形如 `2023-10-19-example-article.md` 的文件。可以根据文章语言不同建立子文件夹。 |
| `_data` | 数据目录，比如朋友链接数据文件 `links.yml`、个人简历数据文件 `cv.yml` 和国际化翻译数据文件目录 `locales`。 |
| `dev` | 主题的 CSS 和 JS 源码目录，使用 `webpack` 工具能够自动构建生产用 CSS 和 JS 文件，并保存到 `assets` 目录。 |
| `pages` | 页面目录，包含了主题的所有基础页面及必需的文件。 |
| `assets` | 生产用的静态文件目录，包括图片、CSS、JS 文件等。 |
| `.gitignore` | 用于声明哪些目录或文件不被 git 跟踪的文件 |
| `.tool-version` | `ASDF` 工具所需的工具链版本声明文件 |
| `.vercelignore` | 用于声明 Vercel 构建时哪些目录或文件被忽略 |
| `CNAME` | Github Pages 所需的域名绑定文件 |
| `Gemfile` | 用于声明项目所需的 Ruby 依赖 |
| `LICENSE` | 项目的开源许可证协议文件 |
| `README.md` | 项目描述文件 |
| `_config.yml` | 主题的默认配置文件，包括正常运行所需的全部基本配置。 |
| `_config_production.yml` | 生产用配置文件，用于自定义配置，覆盖默认配置文件。 |
| `favicon.ico` | 站点标签页图标 |
| `jekyll-theme-h2o-ac.gemspec` | 用于声明项目所需的 Gem 打包配置文件 |
| `package.json` | 用于声明项目开发所需的 NPM 依赖 |
| `webpack.config.js` | 用于声明项目 webpack 构建工作流配置 |
| `webpushr-sw.js` | 消息推送所需文件 |
