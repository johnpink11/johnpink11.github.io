---
layout: post
title: "A Kit to Turn Pandas Dataframe to HTML"
date: 2025-05-21
categories: code
mathjax: true
---
众所周知, 经常用的文本编辑工具可能是word, 但是word在实现自动化方面具有很多的局限性, 比如格式调节、自动化写入、图片插入、表格插入等。虽然有一个`python`库`pydocx`可以实现基本的文字写入、表格创建、插入图片等功能， 但是其格式控制支持不好, 难以实现自己想要的格式。

所以, 我开发了一个可以将`pandas`的`Dataframe`转化为`HTML`表格的工具。我的思路是这样的

$$
\text{Dataframe} \Longrightarrow \text{csv文件} \Longrightarrow \text{tex文件}
$$

当然该方法基本还是基于`pandas.DataFrame`的`to_html()`方法, 只不过我在这个html中添加了样式控制。只不过现在还没有开放用户自定义样式, 后续可以开发使得用户可以自定义字体、表格的样式等。