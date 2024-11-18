# Markdown

Except the basic normal markdown grammar, `H2O-ac` uses plugins to support more Prism themes, flow and others.


## Heading and text

Considering the post title as the first heading, the heading in the post content is used from the second heading as follows:

```markdown
## 二级标题，H2，24px，加粗
### 三级标题，H3，20px，加粗
#### 四级标题，H4，16px，加粗
正文内容，16px，常规
```

![aWnqBJ.webp](/imgs/aWnqBJ.webp)

::: tip
- The font size of text is the same as fourth heading, but **no bold**.
- Althoughh fifth and sixth headings also can be used, the font size is the same as text.
- **TOC is generated until the fourth heading**, so it's not recommended to use fifth and sixth heading.
:::

## Other normal styles

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

::: tip 
- The image will be changed by preset 404 image automatically when it's not found.
- The link is seperated to internal or external url automatically. The external url has a additional symbol.
:::

## Equation

`H2O-ac` uses [MathJax](https://www.mathjax.org/) to support inline and individual equations. The grammar is similar with LaTex using `$$ $$` as follows.

```yaml
mathjax: true
```

```markdown
Inline equation, recommending a space before and after $$ x^2 $$

Individual equation, recommending one more line before and after

$$
  x^2+x^3=19
$$
```

![nTqTJx.webp](/imgs/nTqTJx.webp)

## Codeblock

The codeblock is used like normal way and supports the languages listed in [PrismJS website](https://prismjs.com/#supported-languages) with automatic display。

`H2O-ac` supports all default and [extended themes]((https://github.com/PrismJS/prism-themes/tree/master/themes)) in PrismJS anf autoloads the JS needed as follows:

```yaml
prism:
  theme: tomorrow
  line_numbers: true
```

![TG6Pwz.webp](/imgs/TG6Pwz.webp)

::: tip
`H2O-ac` has a anti-copy feature (the copyright will be added in the end when copying contents). So `H2O-ac` also provides code copy button to avoid this.
:::

## Premonition

`H2O-ac` uses [Premonition](https://github.com/lazee/premonition) to support 5 types: note, info, warning, error and citation. It is compatible with original Markdown grammar and the theme as follows:

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
