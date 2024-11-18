# The begining

As you know, **Jekyll** is a highly customizable and very popular static blog generator. There are many excellent themes based on Jekyll, such as [H2O](https://github.com/kaeyleo/jekyll-theme-H2O) theme developed by [Liao Keyu](https://github.com/kaeyleo). It may be one of the most beautiful Jekyll themes due to many features, including *simple layout, flat design, card based design, visual style of Medium and Zhihu* and others.

In the begining, `H2O` theme is released and open sourced in Github with MIT license. This has attracted a lot of bloggers to switch to Jekyll and `H2O` theme, including me. As more and more bloggers use `H2O` theme, some problems and solutions have been contributed to the `H2O` project, which makes `H2O` better. I also modified some codes based on `H2O` theme and my actual need in practice. Considering these modification may be not needed for most of users of `H2O` theme, I forked the `H2O` project and contributed my code to the new project [zhonger/jekyll-theme-H2O-ac](https://github.com/zhonger/jekyll-theme-h2o-ac), which is released in Github with the same MIT license.

In my opinion, the `H2O-ac` theme is designed especially for schloar researchers and web developers (DevOps).

## New features

### Resonable structures

Although `H2O` theme has meet the needs of most users, it still can be promoted in page structures for scholar researchers and web developers.

- For scholar researchers, it's very important to show the personal information and researchers in the homepage. It's something like `About me` page `about.html` but placed in the homepage `index.html`.
- For web developers, it's necessary to archive all posts in one page `archives.html` to find the interesting posts easily. Despite the search function, card list page and tags page in `H2O` theme can show some of the posts, it's still not simple and convenient. The archive page usually generated in hexo or other web static generotor is the best choice.
- Except these, the change log for the blog website is also important for web developers. It can be thought as the history of the blog website from the begining by years, months and events.
- The resume page is also needed for scholar researchers and web developers. It can show the core information for the owner with a beautiful view, and can be printed conveniently.

Therefore, `H2O-ac` theme made a `page` template from origin home page in `H2O`. According to the needs, several pages including **Scholar Homepage** (`index.html`), **Archives** (`archives.html`), **Change logs** (`logs.html`), **CV** (`cv.html`), **Terms of Service** (`tos.html`) and **Links** (`links.html`) have been added based on `page` template.

### Better experience for readers

On the basis of `H2O` theme, `H2O-ac` theme promoted the experience for readers including:

- **Social Icons Extension**: `H2O` supports the icons for entainment platforms or technical social platforms, while `H2O-ac` adds some icons for scholar social platforms and more icons for technial social platforms.
- **Gallery**<Badge type="tip" text="Only available in posts" />: All images in the same post can be a gallery automatically, which supports enlarging view and  switching between images.
- **Night mode switch button**: In `H2O`, the night mode only can be enabled in the config file and cannot be changed after the deployment. `H2O-ac` provides a more flexible way to enable night mode by readers in the browser through the switch button.
- **Premonition**: Supporting serveral types, including `citation`, `note`, `info`, `warning` and `error`. It is also available in night mode.
- **Code Highliht**: The setting of Prism theme has been introduced in `H2O-ac` config file so that any existed Prism theme are supported.
- **Copy code button**: It's inconvenitent because `H2O` theme has the limitation including the copyright when copying something from the website. It can be avoided if using copy code button to copy the code.
- **Flow**: Mermaid has been used to extend the support of flow in Markdown grammar.
- **Sticky posts**: Keeping other posts ordered by first published time, the pinned post can be shown in the first of `blog.html` or other post list pages.
- **Optimization for paginate**<Badge type="warning" text="After v1.1.7" />: Using the latest `jekyll-paginate-v2` instead of `jekyll-paginate`. Github Action is necessary when deployed in Github Page.
- **Meta information for the cover**: Adding the meta information of cover author and the linke.
- **Word count and reading duration time**: The number of words is calculated and the reading duration time is also estimated acoording to the normal speed.
- **Localized time and latest updating time**: The time displayed in the browser is localized according to the timezone of readers automaticcaly. And the latest updating time is inferred from the time to submit the Github commit.
- **Obvious copyright**: The copyright block has been added in the end of the post, and notices the readers when the latest updating time is long time ago.
- **Outline navigation panel**: It's convenient for readers to jump to the place which readers are interested in.
- **Back to top button**<Badge type="tip" text="Only when sliding up" />: Clicking to slide to the top slowly.

### Many plugins

- **Internaltionalization**<Badge type="warning" text="After v1.2.0" />: It can be set by individual pages. Now it supports Simiplifed Chinese , Tradional Chinese, English and Japanese.
- **Visitor analytic**<Badge type="warning" text="After v1.5.0" />: It supports Google analytic, Baidu analytic, CNZZ, Busuanzi (including self-hosted), Umami, Shynet, Plausible, Fathom, Ackee and Matomo.
- **Comments**<Badge type="warning" text="After v1.4.0" />: It supports Disqus, Waline, Artalk, Utterances, Giscus and Twikoo.
- **Serach**<Badge type="tip" text="Doing" />: It supports local search and DocSearch (free version of Algolia search for documentation or technical blog). More search types will be supported in the future.
- **Badges**: It supports [Forever Blog](https://www.foreverblog.cn/), [Not by AI](https://notbyai.fyi/), [Upyun](https://www.upyun.com) supporting, Webify, [Netlify](https://netlify.com), [Vercel](https://vercel.com), [Cloudflare](https://cloudflare.com), [Travellings](https://www.travellings.cn). In the future, more badges will be supported such as [Deta](https://deta.space)。
- **PWA**: Easy to use progressive web app with `H2O-ac` for better experience.
- **Notification feed**: Using [Webpushr](https://www.webpushr.com/) to deliver messages for post recommendation or emergency notification to subscribed readers.
- **Collection**<Badge type="warning" text="After v1.3.0" />: It's a collection for serveral posts or pages, which is suitable for the collection of series of posts.

### Others

- **One-click grayscale**: Setting the grayscale for the whole website when it's a memorial day.
- **ICP beian**<Badge type="warning" text="if depolyed in China mainland" />: Displaying ICP beian in the footer.
