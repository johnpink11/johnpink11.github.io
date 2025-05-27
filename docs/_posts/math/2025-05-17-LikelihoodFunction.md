---
layout: post
title: "似然函数(Likelihood Function)"
date: 2025-05-18
categories: math
---
If we are given a sample set $X$, we assume that $X$ follows a distribution $ \mathcal{D} $. Of cause $\mathcal{D}$ has its parameters $\theta$, but we have no idea what parameter value will fit this sample. *Likelihood function* is a measure function of how possible the sample $X$ follows the distribution $\mathcal{D}_\theta$. 

$$
L(\theta; x) = \mathbb{P}(X|\theta)
$$

### Maximum Likelihood Estimate(MLE )

If we let the likelihood function closer to 1, we get better model to fit our sample $X$.
The procedure to maximize the likelihood function is called *MLE*. 

$$
\arg\max_{\theta} L(\theta;x)
$$
