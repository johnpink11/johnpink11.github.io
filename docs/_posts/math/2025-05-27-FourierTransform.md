---
layout: post
title: "Fourier变换的一些基础"
date: 2025-05-27
categories: math
---

## Fourier变换
Fourier可以将函数从时间域转化为频率域, 可以用于分析信号的频率组成。

Fourier变换是一个(线性)算子, 常记为$\mathcal{F}$, 

$$
 \mathcal{F}\{f(x)\} = \hat f(\omega)= \int_{-\infty}^{+\infty} f(x)e^{-i\omega x} dx
$$

其逆变换为$\mathcal{F}^{-1}$

$$
 \mathcal{F}^{-1}\{\hat f(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{+\infty} \hat f(\omega) d\omega
$$



### Fourier变换性质
- $\mathcal{F}$ 是一个线性算子
对于任意的常数$c_1, c_2$, 以及任意的存在Fourier变换的函数$f(x), g(x)$, 有

$$
\mathcal{F}\{c_1f(x) + c_2g(x)\} = c_1\mathcal{F}\{ f(x) \} + c_2\mathcal{F}\{ g(x) \}
$$

- $\mathcal{F}$与$\mathcal{F}^{-1}$的平移性质

$$
\forall x_0\in \mathbb{R}, \mathcal{F}\{f(x \pm x_0)\}= \mathcal{F}\{f(x)\}\cdot e^{\pm i\omega x_0}.
$$

$\forall \omega_0\in \mathbb{R}$, $\mathcal{F}^{-1}\{\hat f( \omega \pm \omega_0)\}= \mathcal{F}^{-1}\{ \hat f(\omega)\}\cdot e^{\mp i\omega_0 x}$.
- 时间尺度性

$$
\mathcal{F}\{f(ax)\} = \frac{1}{|a|}\hat f\left (\frac{\omega}{a}\right)
$$

<span style="font-family: 'Comic Sans MS', cursive, sans-serif;">Proof</span>：

$$
\begin{align}
\mathcal{F}\{f(ax)\} & = \int_{-\infty}^{+\infty}f(ax)e^{-i\omega x}dx \\
&=\int_{}f(z)e^{-i\omega z/a} d (z/a)\\
&= \frac{1}{|a|} \int_{-\infty}^{+\infty}f(z) e^{-i\frac{\omega}{a}x}dx \\
&= \frac{1}{|a|} \hat f\left( \frac{\omega}{a}\right)
\end{align}
$$

- 频率尺度性

$$
\mathcal{F}\left\{\frac{1}{a}f\left(\frac{x}{a}\right)\right\} = \hat f(a\omega)
$$

<span style="font-family: 'Comic Sans MS', cursive, sans-serif;">Proof</span>：

$$
\begin{align}
\mathcal{F}\left\{\frac{1}{a}f\left(\frac{x}{a}\right)\right\} &= \int_{-\infty}^\infty \frac{1}{a}f\left(\frac{x}{a}\right)e^{-i\omega x}dx\\
&= \int_{-\infty}^\infty \frac{1}{a} f(z)e^{-i\omega az} daz\\
&= \int_{-\infty}^\infty  f(z)e^{-i\omega az} dz \\
&= \hat f(a\omega)
\end{align}
$$

- 微分性质
如果$f(x)$以及其导数在无穷远趋近于0, 则

$$
\mathcal{F}\left\{ \frac{d^nf(x)}{dx^n}\right\} = (i\omega)^n \hat f(\omega)
$$

<span style="font-family: 'Comic Sans MS', cursive, sans-serif;">Proof</span>：我们只对一阶导函数证明, 高阶可由归纳法得到

$$
\begin{align}
\mathcal{F}\left\{ \frac{df(x)}{dx}\right\} &= \int_{-\infty}^{+\infty} f'(x)e^{-i\omega x}dx\\
&= f(x)e^{-i\omega x} |_{-\infty}^{+\infty} +i\omega \int_{-\infty}^{+\infty} f(x)e^{-i\omega x}dx\\
&= i\omega \mathcal{F}\left\{ f(x)\right\}
\end{align}
$$

#### Fourier与卷积
卷积(Convolution)是数学中非常重要的概念, 同时在深度学习等领域也有众多应用, 其本质是将两个函数在不同位置的加权叠加，可以用于特征提取、处理数据等关键操作。


连续卷积:

$$
(f*g) (t) = \int_{-\infty}^{+\infty}f(\tau)\cdot g(t-\tau) d\tau
$$

离散卷积:

$$
(f*g)[n] = \sum_{m=-\infty}^\infty f[m]g[n-m]
$$

- Fourier变换的卷积性质

$$
\mathcal{F}\{f*g(x)\} = \mathcal{F}\{f(x)\}\cdot\mathcal{F}\{g(x)\} = \hat f(\omega)\cdot\hat g(\omega)
$$


