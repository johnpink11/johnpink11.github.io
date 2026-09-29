# John's Space

博客源码在 `docs/`，使用 Jekyll / GitHub Pages 构建。

## Callout

文章和页面支持以下写法，`[!definition]` 和 `[! definition ]` 都可以：

```markdown
> [!definition] Hypothesis
> A **hypothesis** is a prediction function.
>
> $$
> h: \mathcal{X} \to \mathcal{Y}
> $$

> [!note]
> 没有指定标题时，会自动显示 Note。
```

支持 `definition`、`example`、`note`、`tip`、`success`、`warning`、
`caution`、`danger`、`error`、`important`；其他名称使用默认配色。
Callout 可以包含强调、链接、列表、公式和嵌套引用。普通引用保持原样。
这里支持静态提示框，不支持 Obsidian 的 `+` / `-` 折叠标记。
浏览器会通过 JavaScript 将引用转换成提示框；禁用 JavaScript 时显示原始引用。

## 多行公式

在正文和 `$$` 之间留空行，公式结束后也留空行，让 Kramdown 将其识别为独立公式块：

```markdown
下面是推导：

$$
\begin{aligned}
f(x) &= (x + 1)^2 \\
     &= x^2 + 2x + 1
\end{aligned}
$$

继续正文。
```

在 `$$ ... $$` 内使用 `aligned`，用 `&` 指定对齐位置、`\\` 换行。
Callout 中的空行也要保留 `>`，如上面的例子所示。
