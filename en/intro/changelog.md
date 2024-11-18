# Change Log

## v1

### <Badge type="tip" text="v1.5.0" />
**Feature**
- Support more analytic tools, including [Shynet](https://github.com/milesmcc/shynet), [Plausible](https://plausible.io/), [Fathom](https://usefathom.com/), [Ackee](https://ackee.electerious.com/) and [Matomo](https://matomo.org/)

**Fix**
- The wrong `link` label of `fancybox`

### <Badge type="tip" text="v1.4.0" />
**Feature**
- Support more comment systems, including [Artalk](https://artalk.js.org/), [Utterances](https://utterances.es/), [Giscus](https://giscus.app/) and [Twikoo](https://twikoo.js.org/)
- Support more badges, including [Netlify](https://netlify.com/), [Vercel](https://vercel.com/) and [Cloudflare](https://www.cloudflare.com/)
- Support [MOE ICP Beian](https://icp.gov.moe/)

**Fix**
- The switch button for comment systems
- The CSS style of cover provider in the meta information of posts
- Update all CSS/JS to the (automatic) latest

### <Badge type="tip" text="v1.3.6" />
**Feature**
- Support **Self-hosted Busuanzi 不蒜子**

**Fix**
- Use local icons for `Foreverblog`, `Wormhole`, `Travellings`

### <Badge type="tip" text="v1.3.5" />
**Fix**
- Remove the abundant head navigation in `tags.html` (while it works after <Badge type="tip" text="v1.3.6" />)
- Add documentation link in `README.md`

### <Badge type="tip" text="v1.3.4" />
**Fix**
- Use CDN link for `Travellings` logo
- Remove the abundant head navigation in `404.html`
- Adjust the line-height of `ul>li` elements to 1.8 times

### <Badge type="tip" text="v1.3.3" />
**Fix**
- Remove the unnecessary space in `app.min.css` and `app.min.js` url
- The CSS style of `ul` element from 1 to 99 (It was only from 1 to 9)

### <Badge type="tip" text="v1.3.2" />
**Feature**
- Support [DocSearch](https://docsearch.algolia.com/) search type (a free projection of Algolia Search for documentation or technique blogs)

### <Badge type="tip" text="v1.3.1" />
**Feature**
- Support more views, color schemes and customized colors for post calendar
- Support [Travelling 开往](https://www.travellings.cn/) badge
- More modern style for the pinned posts
- More modern style for `ol>li` elements in `archives.html` and posts
- Support external urls for the collection submenu in posts

**Fix**
- Refactor the files in `_layouts` directory
- The internationalization for `archives.html`
- Adjust the width of post calendar in `archives.html` automatically
- The CSS styles in posts including pictures, tables, outline and others
- Add missing `aria-label` property for some links
- Make a template for `404.html`

### <Badge type="tip" text="v1.3.0" />
**Feature**
- Post calendar with Github style in the sidebar and `archives.html`
- Support the collection submenu in posts

**Fix**
- Update the url for Waline JS file
- The version link and wrong display for beian link
- Update CDN for MathJax from MathJax to jsDelivr
- Some problems of pinned posts in `blog.html`
- Updating Symbol icons for all icons
- Update the CSS styles for color schemes
- Support the internationlization for `links.html` and the footer

### <Badge type="tip" text="v1.2.1" />
**Feature**
- Two color schemes: blue (default) and pink
- Add switch button for different languages for all pages
- Support [NotByAI](https://notbyai.fyi/) badge

### <Badge type="tip" text="v1.2.0" />
**Feature**
- Support internationalization (`zh-Hans`, `zh-Hant`, `en` and `ja`; page-level control)

**Fix**
- Optimize CSS and use CDN for all third-party libraries
- Update CSS styles for the link and `ul>li` element in all pages

**Develop tool chain**
- Switch it from `gulp` to `webpack`

::: tip
Until now, the naming of the version is casual. For example, there are 14 patch versions between `v1.1.0` and `v1.2.0` although there are some minor updates in them. Therefore, the version wil follow the rule (`major.minor.patch`) of sematic version 2.0.0 after `v1.2.0` version. **The major** version will be only relaesed when the architecture of the code has been changed a lot. So it will be `v1` for very long time. **The minor** version will follow the plan of important features and be released. **The patch** version will be hotfix or the continus updating of **the minor** version. Certainly, it can be also some temporary small features, which will be extended or promoted in near future.
:::

### <Badge type="tip" text="v1.1.15" />
**Fix**
- Update `bundler` verion in requiremnets from `~>2.3.4` to `~>2.3`

### <Badge type="tip" text="v1.1.14" />
**Feature**
- Display the sum of all posts in the `archives.html`

**Fix**
- Some problems of CSS styles of comment systems in Safari
- Some CSS styles of outline in posts and recent updates in the sidebar
- Some CSS styles in the page

### <Badge type="tip" text="v1.1.13" />
**Feature**
- Support badges for [Foreverbloog 十年之约](https://foreverblog.cn/) and [Wormhole 虫洞](https://foreverblog.cn/go.html)
- Support real alive time for the site in the footer
- Use [webpushr](https://www.webpushr.com/) to push notifications
- Add `RECENT UPDATES` panel in the sidebar
- Support the page-level control for comment systems
- Display the figure caption for the images in posts

**Fix**
- Unify the sidebar in all pages
- Add Reactions for Waline and Disqus

### <Badge type="tip" text="v1.1.12" />
**Feature**
- Use [mermaid](https://github.com/mermaid-js/mermaid) to support the flows
- Add some panels in the sidebar
- Seperate links to internal and external links for different styls
- Add `categories.html`

**Fix**
- Some problems of CSS styles in Safari
- Adjust the layout of the page in mobile view

### <Badge type="tip" text="v1.1.11" />
**Feature**
- Add individual page for friends in `links.html`
- Support and optimize multiple-level head navigation
- Add individual CV page for peasonal resume (view with browsers or print with PDF)
- Update [LXGW WenKai 霞鹜文楷](https://github.com/chawyehsu/lxgw-wenkai-webfont) as the default font

**Fix**
- The valid Cookie time has been extended from 1 day to 365 days
- Some problems when post meta information overflow the cover
- Some CSS styles in posts

### <Badge type="tip" text="v1.1.10" />
**Feature**
- Add Cookie prompt
- Add TOS (Terms of Service) page
- Support to show tags in ascending order of the frequency used
- Hot keys to switch posts for the previous or next post (left and right key, only available in posts)

### <Badge type="tip" text="v1.1.9" />
**Fix**
- Some problems when displaying the latest two years' posts in `archives.html`
- The wrong urls for the cover image and status icon

### <Badge type="tip" text="v1.1.8" />
**Fix**
- Some problems in the paginate of `blog.html`

### <Badge type="tip" text="v1.1.7" />
**Feature**
- Add the meta information for the author and link of the cover image
- Support all PrismJS themes for code highlight
- The post can be pinned on the top

**Fix**
- Update `jekyll-paginate` to `jekyll-paginate-v2`

::: warning

Github Page currently doesn't support `jekyll-paginate-v2`, so please use Github Action for the depolyment of Github Pages after upgrading to `v1.1.7`. If you want more details, please refer to [From Github](/en/intro/quickstart.html#from-github)。
:::

### <Badge type="tip" text="v1.1.6" />
**Feature**
- Support two comment systems (Disqus and Waline) at the same time and switch button for them
- Update the latest updating time for posts according to Github API (commits)
- Display the publish and latest updting time with the timezone of readers automatically

**Fix**
- Automatic change for the night mode of Disqus according to the swithc button

### <Badge type="tip" text="v1.1.5" />
**Fix**
- Some display problems of CSS styles in Safari

### <Badge type="tip" text="v1.1.4" />
**Feature**
- Support [Umami](https://umami.is/) analytic tool
- Add obvious copyright in the end of post content
- Display the version of `H2O-ac` theme in the footer

**Fix**
- Some CSS styles

### <Badge type="tip" text="v1.1.3" />
**Feature**
- Add outline button for mobile view (display or hidden the contents)
- Optimize Prism and code themes
- Support [busuanzi 不蒜子](https://busuanzi.ibruce.info/) tool

**Fix**
- Prism themes

### <Badge type="tip" text="v1.1.1" />
**Feature**
- Support lazy-load for images and friendly 404 image in posts

### <Badge type="tip" text="v1.1.0" />
**Feature**
- Support PWA (Progressive Web App)
- Optimize the performance according to lighthouse test

### <Badge type="tip" text="v1.0.3-1" />
**Fix**
- The style for code copy button in posts

### <Badge type="tip" text="v1.0.3" />
**Feature**
- One-click copy button for code snippets
- Back to top button
- Day or night mode switch button
- One-click grayscale for the whole site
- More date formats
- The highlight navigation in outline or contents of posts
- Six premention styles (default, note, info, warning, error, citation)

**Fix**
- Use Symbol class instead of font class for icons
- Fix the display problem of favicon when the `baseurl` is used
- Update `fancybox` to `v4.0`

### <Badge type="tip" text="v1.0.2" />
**Feature**
- Outline or contents of posts

**Fix**
- Some problems

### <Badge type="tip" text="v1.0.1" />
**Feature**
- The first release version for RubyGem

### <Badge type="tip" text="v1.0.0" />

**Feature**
- The first public release version
- Suppoting `archives`, scholar homepage, `logs` pages
- Advanced performance for posts, including picture viewer, code highlight, counting, duration time for reading, more social icons and others.
