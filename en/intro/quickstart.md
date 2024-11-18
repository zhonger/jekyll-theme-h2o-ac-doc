# Quick start

For the convenience, `H2O-ac` theme has been generated to Gem library and uploaded to [Rubygems](https://rubygems.org/gems/jekyll-theme-h2o-ac). Therefore, you can use `H2O-ac` theme like Jekyll official themes.

Here are some ways using `H2O-ac` theme to build a new blog from templates:

::: tip
A new repository will be created in Github to store the source code with the following ways.
:::

## From Github

Because [zhonger/easy-to-h2o-ac](https://github.com/zhonger/easy-to-h2o-ac) repository has included all essential files for using `H2O-ac` theme, you can just access the repository and click <Badge type="tip" text="Use this template" /> button with the option `Create a new repository` to create your repository。

::: warning Why fail to deploy in Github Pages?
From `v1.0.7` version, the paginate plugin has been updated to `jekyll-paginate-v2`, which is incompatible with default environment of Github Pages. Github Action or other third-party CI platforms are needed to build the static files and deploy to `gh-pages` branch. Then it will be ok for Github Pages. The details for using Github Action please refer to [Jekyll/Github Actions](https://jekyllrb.com/docs/continuous-integration/github-actions/). For the third-party CI platforms, please refer to their documentations such as [Buddy/Github Integration](https://buddy.works/docs/integrations/github/github).
:::

## From Netlify

Click the below button to deploy a new Jekyll blog with `H2O-ac` theme in Netlify.

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zhonger/easy-to-h2o-ac)

## From Vercel

Click the below button to deploy a new Jekyll blog with `H2O-ac` theme in Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zhonger/easy-to-h2o-ac)

## From Cloudflare

Because Cloudflare pages doesn't provide one-click creating way, you have to login to [Cloudflare Pages](https://pages.cloudflare.com/) and import the Github repository with web interface. **For this way, you need to create a new Github repository from `easy-to-h2o-ac` template firstly.**

## Transfer from others

The recommended way is to create a new blog repository from `easy-to-h2o-ac` template and move the markdown files to `_posts` directory, if you want to transfer from other Jekyll themes or static generators to `H2O-ac` theme.

::: warning How to keep old Git commits?
If you want to keep old Git commits, it's better to modify files manually according to all files in [zhonger/easy-to-h2o-ac](https://github.com/zhonger/easy-to-h2o-ac) template. After the modification, the change of `H2O-ac` theme can be a commit to submit too.
:::

## Q&A

::: tip Should you make a copy directly from [zhonger/jekyll-theme-h2o-ac](https://github.com/zhonger/jekyll-theme-h2o-ac) to create your new blog?

**It is not recommended** if you don't plan to develop `H2O-ac` theme in your own branch.

On the one hand, `H2O-ac` theme contains many CSS/JS files, which is abundant and meaningless for the blog. On the other hand, you cannot get the update of `H2O-ac` theme in the future.

If you are using `easy-to-h2o-ac` template, the deployment will use the latest `H2O-ac` theme code from RubyGems automatically.

Of course, you can also fix the version of `H2O-ac` theme in `Gemfile` file and avoid the automatic update.
:::
