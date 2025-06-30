---
layout: post
title: "泛函分析试题"
date: 2025-06-30
categories: math
---

## 一、概念与定理描述
1. Lax-Milgram定理
2. 闭图定理
3. 赋范空间上的Hahn-Banach定理
4. Banach逆算子定理
5. 预解集


## 二、证明题
1. $X$是Hilbert空间, $\\{ e_{\alpha} \\}_{\alpha\in\Lambda}$ 是$X$中的正交规范集, 求证: $\forall x\in X$ 
$$
||x-\sum_{\alpha\in \Lambda} \langle x, e_{\alpha} \rangle e_{\alpha}||^2 + \sum_{\alpha\in\Lambda}|\langle x, e_{a} \rangle |^2 =||x||^2
$$

2. 证明一致有界定理(共鸣定理)

3. 设$X, Y$是Banach空间, $A_{n}\in \mathscr{L}(X, Y)$, $\forall x\in X$, 序列$\\{ A_{n}x \\}$在$Y$中收敛, 证明存在$A\in \mathscr{L}(X, Y)$满足:
$$
\lim_{ n \to \infty } A_{n}x= Ax, \quad(\forall x\in X) \quad \quad ||A||\le\liminf_{ n \to \infty } ||A_{n}||
$$

4. 设$X$是赋范空间, $x_{n}\xrightarrow{w}x_{0}$, 求证:
$$
\liminf_{ n \to \infty } ||x_{n}|| \ge ||x_{0}||
$$

5. $X$是可分的赋范空间, 证明: $X^{\*}$上的有界列$(f_{n})\subset X^{\*}$是星弱收敛的
