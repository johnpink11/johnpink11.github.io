---
layout: post
title: "Supervised Learning"
date: 2026-09-29
categories: math
---

> [! definition ] Hypothesis
> A *hypothesis* or a prediction function is a function
>
> $$
> h: \mathcal{X} \to \mathcal{Y} .
> $$
>

- The goal of supervised learning is to learn a hypothesis $h$ from labeled training data that can accurately predict the target $y$ for unseen inputs. 

> [! definition ] Training Set
> A training set is a  set of pairs 
>
> $$
>  \{ (x^{(1)}, y^{(1)}), \dots, (x^{(n)}, y^{(n)}) \}
> $$
>
> where $x^{(i)}\in \mathcal{X}$ and $y^{(i)} \in \mathcal{Y}$  for $i =1 ,\dots, n$. 

## Taxonomy of ML Problems
Supervised learning problems can be broadly categorized according to the nature of the target space $\mathcal{Y}$: 
- **Regression**: The target variable is *continuous*. 
- **Classification**: The target variable takes values from discrete set of classes. 

> [! example ]
> House price prediction is a regression problem, and classifying images as cats and dogs is a classification task.




## A Linear Model as an Example
Suppose we have a linear model of the form

$$
h_{\theta}(x^{(i)}) = \theta_{0} x_{0}^{(i)} + \theta_{1}x_{1}^{(i)} + \dots + \theta_{d}x_{d}^{(i)} = \theta x^{(i)} .
$$

and the corresponding target is denoted by $y^{(i)}$. 
-  We call $\theta$  **parameters**, $x^{(i)}$ the **input** or the **features**. 
- and the **output** or **target**(label) is $y^{(i)}$.
- The pair $(x, y)$ is a **training example** and $(x^{(i)}, y^{(i)})$ is the $i$-th example. 

Let $X$ denote the design matrix and $y$ denote the target vector: 

$$
X = \begin{bmatrix}  
x^{(1)} \\
x^{(2)} \\
\dots \\
x^{(n)}
\end{bmatrix} \in \mathbb{R}^{n\times (d+1)} .
$$

$$
y = \begin{bmatrix}
y^{(1)} \\
y^{(2)}  \\
\dots \\
y^{(n)}
\end{bmatrix}.
$$

We denote $h_{\theta} (X)$ by

$$
h_{\theta} (X) =X\theta= \begin{bmatrix}
h_{\theta} (x^{(1)})  \\
h_{\theta}(x^{(2)})  \\
\dots \\
h_{\theta}(x^{(n)})
\end{bmatrix} .
$$

We want to choose $\theta$ so that $h_{\theta}(X) \approx y$. 

To achieve this, we need a loss function that quantifies the discrepancy between the model predictions and the target values.

One common choice is the *least-squares* loss

$$
J(\theta) = \frac{1}{2} \sum_{i=1}^n \left( h_{\theta}(x^{(i)}) - y^{(i)} \right)^2 .
$$

We seek the parameter vector that minimizes the loss: 

$$
\theta^* = \arg \min_{\theta} J(\theta). 
$$

## Gradient Descent(梯度下降)

If $\theta^{(0)} = 0$(here is a zero vector), gradient descent iteratively updates the parameters according to

$$
\theta_{j}^{(t+1)} = \theta_{j}^{(t)} - \alpha \frac{\partial}{\partial \theta_{j}} J(\theta) \quad \text{ for } j=0, \dots, d.
$$

- $\alpha$ is called *step size* or *learning rate*.

For the linear model with the least-squares loss, the partial derivative with respect to $\theta_{j}$ is given by

$$
\frac{\partial }{\partial \theta_{j}} J(\theta) = \sum_{i=1}^n \left(h_{\theta}(x^{(i)}) - y^{(i)} \right)x_{j}^{(i)} .
$$

Substituting this gradient into the update equation yields

$$
\theta^{(t+1)} = \theta^{(t)} - \alpha \sum_{i=1}^n \left(h_{\theta}(x^{(i)} - y^{(i)})\right) x^{(i)} .
$$

## Stochastic Gradient Descent(随机梯度下降)
A major limitation of batch gradient is its computational cost. At each iteration, the gradient must be computed using the entire training set. However, real-world training datasets are often very large, making full-batch gradient computation expensive. 

*Stochastic Gradient Descent*can addresses this limitation by 

> [! note] 
> Sample a few points (maybe just one) to approximate the gradient. 

Stochastic Gradient means we don't calculate the whole sum of all $n$ samples. Instead, we sample a little batch of it to approximate the gradient.

$$
\theta^{(t+1)} = \theta^{(t)} - \alpha \sum_{i=1}^n \left(h_{\theta}(x^{(i)} - y^{(i)})\right) x^{(i)} .
$$

v.s.

$$
\theta^{(t+1)} = \theta^{(t)} - \alpha_{B} \frac{1}{|B|}\sum_{i\in B} \left(h_{\theta}(x^{(i)} - y^{(i)})\right) x^{(i)} .
$$

- Here, $B$ should reflect the whole dataset.
- Smaller batch size $B$ implies a lower quality approximation of the gradient(high variance). But that makes the model converge faster. (Dataset always has lots of redundancy). 

## The Normal Equations for Linear Regression
The least-squares loss can be expressed in matrix form as

$$
J(\theta) = \frac{1}{2}(X\theta - y)^T (X\theta - y).
$$

To find a minimizer of $J(\theta)$, we set its gradient with respect to $\theta$ to zero: 

$$
\nabla_{\theta} J(\theta) = 0.
$$

And thus 

$$
\begin{aligned}
\nabla_{\theta} J(\theta) &= \frac{1}{2}\nabla_{\theta} (X\theta - y)^T(X\theta -y)  \\
&= \frac{1}{2}\nabla_{\theta} (\theta^T X^TX\theta - 2\theta^TX^Ty + y^Ty)  \\
&= X^TX\theta - X^T y = 0.
\end{aligned}
$$

Solving the resulting normal equations gives

$$
\theta^* = (X^TX)^{-1} X^T y.
$$
