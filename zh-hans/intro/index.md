# 缘起

正如大家所知，Jekyll 是一款高可定制的、非常流行的静态博客生成工具。围绕着 Jekyll 也衍生出了很多优秀的 Jekyll 主题，[廖柯宇](https://github.com/kaeyleo) 开发的 [H2O](https://github.com/kaeyleo/jekyll-theme-H2O) 主题就是其中之一。极简主义、风格扁平化、卡片式布局、融入 Medium 及知乎专栏的视觉风格等等特点，为我们带来了或许是迄今为止最漂亮的 Jekyll 主题。

诞生之初，H2O 主题就在 Github 平台上以 MIT 许可证协议开放了源代码。这吸引了很多小伙伴纷纷转投 Jekyll 和 H2O 主题的阵营，本人也是其中之一。随着使用者越来越多，不少的小伙伴在使用过程中发现了一些小问题并主动修复，最后贡献到了 H2O 的主项目，这让 H2O 主题变得更好。本人在使用过程中也发现了一些与自己实际需求不大一致的地方，并且在原 H2O 主题的基础上做了一些改动。考虑到这些改动可能并不是大多数人的需求，直接向原 H2O 主题提交 pull 请求合并的必要性不大，因此决定将原项目 fork 并改名为 [zhonger/jekyll-theme-H2O-ac](https://github.com/zhonger/jekyll-theme-h2o-ac)，并将源代码以与 H2O 主题相同的 MIT 许可证协议在 Github 平台上公开。

## 新特性

### 合适的页面结构

H2O 主题其实在很大程度上已经满足了大部分人的需求，只是对于学术研究人员和运维程序员来说，个人觉得页面结构还是有提升的空间。

- 学术研究人员比较重视在首页直接展示个人信息和研究情况，能够让人很快地了解到所需的信息，这其实是将 About me 这样一个平常的辅助页面当成了主页面来用。
- 运维程序员比较重视能一览所有文章的标题以迅速找到感兴趣的文章。虽然搜索功能、标签页、卡片展示页都能够列出所有的文章，但个人觉得还是不够简洁、方便。而像 Hexo 静态生成工具自带的 Archive 归档页面比较能满足这样的需求。
- 除此之外，整个博客的系统日志变迁记录对于运维程序员来说也非常重要，毕竟如果通过发布一篇文章来描述变迁过程并不适合联系起来完整了解。如果有系统日志页，就可以按照年份、月份、事件的先后进行简要的描述，并且一览无遗。
- 简历页对于学术研究人员和运维程序员也比较重要，能够非常美观地展示核心信息，且支持一键打印，方便快捷。

因此，H2O-ac 主题从原来 H2O 的主页中抽出框架做成了页面模板。根据实际页面的内容需求，增加了**学术首页**、**归档页**、**系统日志页**、**个人简历页**、**服务条款页**、**友情链接页**。

### 沉浸式阅读体验

在 H2O 主题的基础上，H2O-ac 对使用体验和阅读体验进行了提升。包括但不限于以下方面：

- **社交图标扩展**：H2O 支持的图标大部分是日常娱乐和技术类社交图标，H2O-ac 则增加了对学术类社交图标的支持以及对技术类社交图标的扩展。
- **图库**<Badge type="tip" text="仅限于文章" />：自动将文章内所有图片组成一个图库，方便点击大图浏览、以及图片间的切换。
- **夜间模式切换按钮**：H2O 支持的夜间模式设置仅限于预先配置，部署后读者无法更改。H2O-ac 通过增加切换按钮的方式实现了对夜间模式手动切换的支持，原来的预先配置逻辑依旧保留。
- **提示框**：支持五种，笔记、提示、警告、错误、引用。兼容夜间模式。
- **代码高亮优化**：引入 Prism 主题机制，可以在配置中定义使用任意一种已有的 Prism 主题。
- **代码复制**：由于 H2O 主题默认有复制附带版权声明的限制，复制代码是不大方便，使用代码复制按钮可以忽略这一限制。
- **流程图**：使用 Mermaid 扩展了 Markdown 语法对丰富流程图的支持。
- **文章置顶**：遵循 H2O 主题的文章卡片展示页面默认以发布时间排序的同时，可以将文章强制放在最前面展示。
- **分页优化**<Badge type="warning" text="1.1.7 版本之后" /> ：使用最新分页依赖库 `jekyll-paginate-v2` 替代默认的 `jekyll-paginate`。（需配合 Github Action 使用）
- **封面图片元信息描述**：增加了封面图片提供者的描述及链接。
- **字数统计及阅读时间估计**：根据文章字数的统计及一般人阅读速率估计可能所需阅读时间，便于读者进行合理的安排。
- **时间本地化与最近更新时间**：根据读者浏览器所处的时区更新文章发布及更新时间，方便跨时区交流。同时，自动根据文章的 Github commit 来推断最近更新时间。
- **版权显式声明**：在文章的末尾增加版权声明块，同时根据最近更新时间来提供文章内容是否过于久远的提醒。
- **文章侧边索引导航**：增加文章页面导航，便于读者根据标题直接跳转到感兴趣的位置。
- **回到顶部按钮**<Badge type="tip" text="仅在上滑时出现" />：点击之后缓慢向上滑动直至顶部。

### 丰富的插件支持

- **多语言支持**<Badge type="warning" text="1.2.0 版本之后" />：以页面作为最基本的多语言支持单位，目前支持简体中文、繁体中文、英文、日文四种语言。
- **访问统计**<Badge type="tip" text="开发中" />：目前支持谷歌统计、百度统计、CNZZ 统计、不蒜子统计、Umami 统计，后续将继续增加其他统计方式。
- **评论**<Badge type="tip" text="开发中" />：目前支持 Disqus 和 Waline，后续将继续增加其他评论方式。
- **搜索**<Badge type="tip" text="开发中" />：目前仅支持本地搜索，后续将继续增加其他搜索方式。
- **图标**：支持 [Forever Blog](https://www.foreverblog.cn/)、[Not by AI](https://notbyai.fyi/)、[Upyun](https://www.upyun.com) 赞助、Webify 图标，未来将增加 [Netlify](https://netlify.com)、[Vercel](https://vercel.com)、[Cloudflare](https://cloudflare.com)、[Deta](https://deta.space)、[Travellings](https://www.travellings.cn) 等图标。
- **PWA**：支持将站点一键变成渐进式 Web 应用，提升读者的用户体验。
- **消息推送**：使用 [Webpushr](https://www.webpushr.com/) 实现来自站长的主动消息推送，可以用于向订阅用户推送文章推荐或者发布紧急消息。
- **页面间侧导航**<Badge type="warning" text="1.3.0 版本之后" />：将支持页面间的自定义导航，适合系列文章或文档类型文章使用。

### 其他

- **一键灰度**：支持全站变灰，可用于国家公祭日等哀悼场合。
- **备案号**<Badge type="warning" text="适用于国内部署" />：一键配置工信部备案号。