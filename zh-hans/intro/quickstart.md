# 快速上手

为了方便使用 `H2O-ac` 主题，已经将主题打包成 Gem 包并上传到 [Rubygems](https://rubygems.org/gems/jekyll-theme-h2o-ac)，因此可以获得类似于 Jekyll 官方主题一样的使用体验。

以下介绍几种从模板使用 `H2O-ac` 主题新建博客的方式：

::: tip 提示
以下创建方式均会在 Github 创建一个项目用于存储原始代码。
:::

## Github 创建

[zhonger/easy-to-h2o-ac](https://github.com/zhonger/easy-to-h2o-ac) 模板包含了 `H2O-ac` 主题所需的一切基本文件，直接访问项目地址点击 <Badge type="tip" text="Use this template" /> 按钮下拉选项中的 `Create a new repository` 即可创建自己的博客代码仓库。

::: warning Github Pages 部署失败提醒
自 `v1.0.7` 版本之后，分页插件更新为 `jekyll-paginate-v2`，无法与 Github Page 的默认构建环境进行兼容，所以需要使用 Github Action 或者第三方 CI 平台构建后将结果文件推送到 `gh-pages` 分支，才可以正常使用 Github Pages。Github Action 详细可以参考 [Jekyll/Github Actions](https://jekyllrb.com/docs/continuous-integration/github-actions/)，第三方 CI 平台详细可以参考 [Buddy/Github Integration](https://buddy.works/docs/integrations/github/github)。
:::

## Netlify 创建

点击下面按钮即可一键将使用 `H2O-ac` 主题的博客部署在 Netlify。

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zhonger/easy-to-h2o-ac)

## Vercel 创建

点击下面按钮即可一键将使用 `H2O-ac` 主题的博客部署在 Vercel。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zhonger/easy-to-h2o-ac)

## Cloudflare 创建

由于目前 Cloudflare pages 还未提供类似上述的一键创建按钮，只能登录 [Cloudflare Pages](https://pages.cloudflare.com/) 之后使用图形界面的方式导入 Github 项目进行部署。**因此，从模板创建一个新的 Github 项目是必须预先操作。**

## 迁移

无论是从其他 Jekyll 主题、或者是静态生成器迁移到 `H2O-ac` 主题，都首先推荐使用上述方式一键创建新的博客，然后将原来博客文章的 Markdown 文件放在 `_posts` 目录中即可完成迁移。

::: warning 保留原有 commit 的迁移方式
如果想要保留原来博客 Git commit，则推荐对照 [zhonger/easy-to-h2o-ac](https://github.com/zhonger/easy-to-h2o-ac) 项目中的文件修改原来的项目。这样一来，完成后可以将主题更换作为一次 commit 进行提交。
:::

## Q&A

::: tip 是否应该从 [zhonger/jekyll-theme-h2o-ac](https://github.com/zhonger/jekyll-theme-h2o-ac) 直接克隆创建博客？
如果不打算对主题进行二次开发，**不推荐这样做**。

一方面，H2O-ac 主题项目中包含了较多的前端和基本代码文件，会增加新建博客的代码冗余，意义不大。
另一方面，无法获得后续的功能更新。如果使用 easy-to-h2o-ac 则可以在部署时自动从 Rubygems 获得最新主题代码。当然，也可以在 `Gemfile` 文件固定主题版本，从而避免自动更新。
:::

::: tip 

:::
