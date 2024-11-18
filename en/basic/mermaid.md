# Flow

Someone may wants to use flow in the post. In `H2O-ac`, it's supported by Mermaid library.

Compatible to Markdown grammar, here customized code type is used when using Mermaid. If the code type is `mermaid`, PrismJS will use the code as the codeblock; If the code type is `mermaid2`, the code will be rendered by Mermaid library to the flow, as follows:

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

Considering the limited width in posts, the performance rendered by Mermaid library may be a little ugly. **Enlarge view in fullscreen** is also supported by `H2O-ac` as follows clicking the enlarge button in the right top of the flow.

![0LXqbQ.webp](/imgs/0LXqbQ.webp)
