# 流程图

不少同学可能会有在文章中放置流程图的需求，为了满足这一需求，`H2O-ac` 添加了 Mermaid 来支持像写代码一样画图。

  为了兼容 Markdown 语法，这里采用了自定义的代码类型。当代码类型为 `mermaid` 时，PrismJS 会自动以代码的形式美化展示；当代码类型为 `mermaid2` 时，页面会自动画成图展示出来，如下所示。


````mermaid
```mermaid2
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````

![X7N5Hr.webp](/imgs/X7N5Hr.webp)

考虑到页面宽度有限，Mermaid 所画出的甘特图等其他比较大一点的图不太好看，也增加了**放大重绘**的功能。如下所示，点击图的右上角的按钮即可全屏查看大图。

![0LXqbQ.webp](/imgs/0LXqbQ.webp)
