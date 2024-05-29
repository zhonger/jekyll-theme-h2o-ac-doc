# 基本语法

除了基本常见的 Markdown 语法外，`H2O-ac` 利用插件的方式支持了更加丰富的代码高亮主题、流程图等。

## 标题与正文

考虑到标题为一级标题，正常从二级标题开始使用，具体样式如下所示。

```markdown
## 二级标题，H2，24px，加粗
### 三级标题，H3，20px，加粗
#### 四级标题，H4，16px，加粗
正文内容，16px，常规
```

![aWnqBJ.webp](/imgs/aWnqBJ.webp)

::: tip 提示
- 正文字体与四级标题大小相同，但**无加粗**。
- 虽然五级、六级标题也可以正常使用，但与正文字体样式一样。
- **目录导航自动生成到四级标题为止**，因此建议非必要不使用五六级标题。
:::

## 其他常规样式

```markdown
**加粗字体**
*斜体字体*
~~带删除线字体~~
[链接显示名称](链接地址)
![图示](图片链接地址)
`特殊字符串`
尾注[^1]
[^1]: 尾注内容
```

![DPl5SC.webp](/imgs/DPl5SC.webp)

::: tip 提示 
- 图片未找到时会自动用预置的 404 图片替代。
- 链接会根据站内站外进行自动区分，站外链接后面会有一个符号。
:::

## 公式

`H2O-ac` 采用 [MathJax](https://www.mathjax.org/) 支持行内公式和独立公式，默认如下已开启。语法与 LaTex 一致，采用 `$$ $$` 来包含 LaTex 字符串。

```yaml
mathjax: true
```

```markdown
行内公式，建议前后空格 $$ x^2 $$

独立公式，建议前后都空一行

$$
  x^2+x^3=19
$$
```

![nTqTJx.webp](/imgs/nTqTJx.webp)

## 代码

可以正常使用常规方式引入代码块，支持所有 [PrismJS 官网列举的 297 种编程语言](https://prismjs.com/#supported-languages)，并自动显示类型。

`H2O-ac` 支持 PrismJS 的所有默认主题及[扩展主题](https://github.com/PrismJS/prism-themes/tree/master/themes)，且根据需求自动加载及代码行号是否显示配置。具体如下：

```yaml
prism:
  theme: tomorrow
  line_numbers: true
```

![TG6Pwz.webp](/imgs/TG6Pwz.webp)

::: tip 提示
由于 `H2O-ac` 有防复制功能（复制内容时会自动加入版权声明在尾部），代码块提供单独的复制按钮，避免有版权声明。
:::

## 提示框

`H2O-ac` 采用 [Premonition](https://github.com/lazee/premonition) 实现五种提示框：笔记、提示、警告、错误、引用，完全兼容原生 Markdown 语法，并对样式进行了主题适应。如下方式使用：

```markdown
> note ""
> Nothing

> info "小提示"
> Nothing

> warning ""
> Nothing

> error ""
> Nothing

> citation "Nobody"
> Nothing

```

![Qx8cPb.webp](/imgs/Qx8cPb.webp)


