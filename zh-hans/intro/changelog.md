# 更新日志

## v1

### <Badge type="tip" text="v1.3.3" />
**修复：**
- 删除 `app.min.css` 和 `app.min.js` 链接中的无用空格
- 有序列表样式支持 1~99 正常显示（之前超过一位数显示不正常）

### <Badge type="tip" text="v1.3.2" />
**新特性**
- 增加对 [DocSearch](https://docsearch.algolia.com/) 搜索的支持（Algolia Search 的免费项目，仅对文档类型网站或技术博客开放免费申请）

### <Badge type="tip" text="v1.3.1" />
**新特性**
- 支持更多侧边栏的日历的视图、颜色模式以及自定义颜色
- 支持 [Travelling 开往](https://www.travellings.cn/) 图标
- 博客主页的置顶功能的现代化样式
- 无序列表项的现代化样式（归档页、文章页目录）
- 文章页子菜单的外链支持

**修复**
- 重构 `_layouts` 目录下的文件代码架构
- 归档页的国际化语言支持
- 日历根据页面视图宽度自动调整显示时间区间
- 文章页的样式调整（包括图片、表格和目录等）
- 为某些链接添加丢失的 `aria-label`
- 404 页面模板化

### <Badge type="tip" text="v1.3.0" />
**新特性**
- Github 样式的文章日历（侧边栏和归档页）
- 展示文章集的子菜单（文章页）

**修复**
- 更新 Waline js 文件链接
- 修复版本链接地址，以及备案链接的无端出现
- 更新 Mathjax 的静态文件 CDN 为 jsDelivr
- 修复博客页的置顶错误
- 更新所有图标为 Symbol 方式引入
- 更新主题样式
- 增加链接页和页面底部的国际化支持

### <Badge type="tip" text="v1.2.1" />
**新特性**
- 支持两种主题：默认（蓝色）和粉色
- 增加单独页面和文章的语言切换按钮
- 支持 [NotByAI](https://notbyai.fyi/) 图标

### <Badge type="tip" text="v1.2.0" />
**新特性**
- 增加国际化多语言支持（简繁英日；全局设置，且页面级别可控）

**修复**
- CSS 优化以及将所有第三方库切换为 CDN 加载
- 更新单独页面和文章页中链接和有序列表的样式

**开发工具链**
- 从 `gulp` 切换到 `webpack`

::: tip 温馨提示
一直以来，版本的命名有一些随意，比如说从 `v1.1.0` 到 `v1.2.0` 之间竟然有 14 个小版本，尽管已经有大量的特性更新。这主要还是之前没有进行版本规划直接开发造成的。因此自 `v1.2.0` 版本起，版本编号将正式按照 `重大版本.重要版本.(小)修复版本` 的规则命名。**重大版本**仅在代码整体架构设计发生变化时发布，很长一段时间内可能都在 `v1`。**重要版本**一般是根据已经计划的特性集合开发后发布。**(小)修复版本**主要是代码修复或**重要版本**特性集合的补充开发，也有可能是临时突发、且后期可能面临着再改造的小特性支持。
:::

### <Badge type="tip" text="v1.1.15" />
**修复**
- 修复 `bundler` 版本需求从 `~>2.3.4` 到 `~>2.3`

### <Badge type="tip" text="v1.1.14" />
**新特性**
- 归档页增加所有文章总数统计

**修复**
- 修复 Safari 浏览器中评论区的样式显示
- 修复文章页目录样式和侧边栏最近更新栏目样式
- 修复某些 CSS 样式

### <Badge type="tip" text="v1.1.13" />
**新特性**
- 支持 [Foreverbloog 十年之约](https://foreverblog.cn/) 和 [Wormhole 虫洞](https://foreverblog.cn/go.html) 图标
- 支持站点存活时间实时显示（页面底部）
- 支持 [webpushr](https://www.webpushr.com/) 推送通知
- 支持最近更新栏目（侧边栏）
- 支持评论区的页面级别控制
- 显示图片的图示（文章页）

**修复**
- 统一了页面的侧边栏
- 为 Waline 和 Disqus 评论增加了 Reactions (表情反馈)

### <Badge type="tip" text="v1.1.12" />
**新特性**
- 采用 [mermaid](https://github.com/mermaid-js/mermaid) 增加了对代码驱动的图表和流程图的支持
- 侧边栏增加了一些小插件(面板)
- 区分显示站内链接和站外链接
- 增加了分类页 `categories.html`

**修复**
- 修复 Safari 浏览器中的某些 CSS 样式问题
- 调整页面的布局

### <Badge type="tip" text="v1.1.11" />
**新特性**
- 增加独立的朋友们(友链)页面
- 支持多层级导航栏以及一些优化
- 增加完全独立的简历页（可浏览器查看、可完美打印）
- 更新默认字体为 [LXGW WenKai 霞鹜文楷](https://github.com/chawyehsu/lxgw-wenkai-webfont)

**修复**
- Cookie 时间从 1 天延长至 365 天
- 修复文章页元信息超出封面图片的问题
- 修复页面内容的某些 CSS 样式

### <Badge type="tip" text="v1.1.10" />
**新特性**
- 增加 Cookie 提醒
- 增加服务条款（Terms of Service）页
- 支持标签（tags）按照频率降序排列
- 增加文章前后切换的键盘快捷键（左右键，仅在文章页有效）

### <Badge type="tip" text="v1.1.9" />
**修复**
- 修复归档页中的最近两年的显示错误
- 修复封面图片和状态图标的链接

### <Badge type="tip" text="v1.1.8" />
**修复**
- 修复博客页的分页问题

### <Badge type="tip" text="v1.1.7" />
**新特性**
- 增加封面图片作者和链接信息
- 为代码高亮支持所有 PrismJS 主题
- 增加文章置顶功能

**修复**
- 升级 `jekyll-paginate` 为 `jekyll-paginate-v2`

::: warning 温馨提示
由于 Github Pages 目前还不支持 `jekyll-paginate-v2`，请务必在升级到 `v1.1.7` 版本之后配置 Github Action 部署到 Github Pages。详情请查看 [Github 创建](/zh-hans/intro/quickstart.html#github-创建) 了解更多。
:::

### <Badge type="tip" text="v1.1.6" />
**新特性**
- 支持两种评论方式（Disqus 和 Waline）共存以及自由切换
- 支持根据 Github API 自动推算文章最后更新时间
- 支持文章发布时间、最后更新时间根据阅读用户所在时区自动调整

**修复**
- Disqus 的夜间模式样式自动切换

### <Badge type="tip" text="v1.1.5" />
**修复**
- 某些 Safari 浏览器中的显示问题

### <Badge type="tip" text="v1.1.4" />
**新特性**
- 支持 [Umami](https://umami.is/) 统计
- 在文章内容末端增加显示的版权声明
- 增加主题版本显示（页面底部）

**修复**
- 某些 CSS 样式

### <Badge type="tip" text="v1.1.3" />
**新特性**
- 为移动端文章页增加可交互（显示或隐藏）目录
- 优化 Prism 和代码样式
- 支持 [busuanzi 不蒜子](https://busuanzi.ibruce.info/) 统计

**修复**
- Prism 主题

### <Badge type="tip" text="v1.1.1" />
**新特性**
- 支持图片懒加载和404的友善处理（仅文章页）

### <Badge type="tip" text="v1.1.0" />
**新特性**
- 支持 PWA（渐进式网站应用）
- 根据 lighthouse 测试优化了性能

### <Badge type="tip" text="v1.0.3-1" />
**修复**
- 代码复制按钮样式（文章页）

### <Badge type="tip" text="v1.0.3" />
**新特性**
- 支持代码复制按钮
- 支持返回顶部按钮
- 支持夜间（深色）模式切换按钮
- 支持全站一键灰度化
- 支持时间格式配置
- 支持跟随内容索引目录导航高亮（文章页）
- 支持五种提示框（默认、提示、警告、错误、引用）

**修复**
- 移除遗留字体样式图标，全面 Symbol 化
- 修复网站 favicon 在子目录下无法正常显示的错误
- 升级 `fancybox` 到 v4.0 版本

### <Badge type="tip" text="v1.0.2" />
**新特性**
- 支持目录导航（文章页）

**修复**
- 某些问题

### <Badge type="tip" text="v1.0.1" />
**新特性**
- 正式支持 Gem 包安装应用主题

### <Badge type="tip" text="v1.0.0" />

**新特性**
- 正式发布公开版本
- 支持归档页、学术首页、系统日志页
- 增强的文章页显示及交互效果（如查看大图、代码高亮、字数统计及阅读时间统计、社交图标扩展等）
