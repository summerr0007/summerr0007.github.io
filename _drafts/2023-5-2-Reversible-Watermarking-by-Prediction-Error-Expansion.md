---
layout: post
title:  "Reversible Watermarking by Prediction-Error Expansion 論文筆記"
date:   2023-05-02 24:00:00 +0800
author: "summer"
categories: Data Embedding
header-style: text
tags:
  - Data Embedding
  - 論文筆記
---

## Prediction-Error Expansion

假設有一張灰階圖片，其中 4 個像素如下

![ ]({{site.url}}/img/2023-5-2-Reversible-Watermarking-by-Prediction-Error-Expansion/01.png)

$\hat{x}$ 是根據 a, b, c 三點所做出的預測值

$$ \hat{x}=
    \begin{cases}
         max(a,b)
         & \text {if $c \leq min(a,b)$}
         \\
         min(a,b)
         & \text {if $c \geq max(a,b)$}
         \\
         a + b - c
         & \text {otherwise}
    \end{cases}
$$

藉此可以算出 prediction error

$$ p_e  = x - \hat{x} $$

為了藏入 1 Bit 的隱藏資料 *i*，將 $p_e$ 左移一位，並將 *i* 放入 $p_e$ LSB , 得到 $p'_e$

$$p_e = b_{l-1}b_{l-2...}b_0$$
$$p'_e = b_{l-1}b_{l-2...}b_0 \; i $$

$$p'_e = 2p_e + i $$

$p'_e$ 是被修改後的 prediction error，那修改後的像素值 $x'$ 為

$$ x' = \hat{x} + p'_e = x +p_e+i $$

在取出隱藏資料的時候，只要求出 $p'_e$ 就能從 LSB 得到隱藏資料，並將被更改過的 $x'$ 還原回 $x$

$$ p_e = \lfloor p'_e /2 \rfloor $$

$$ x = x' - p_e -i$$

## Expandable Locations

灰階像素值有上下限，根據得到 $x'$ 的公式，在上限是 $L$ 的情況下

$$\begin{aligned} x+p_e \leq L-2 \quad \text{if \ $p_e \geq 0$} \\  x+p_e \geq 0 \quad \text{if \ $p_e < 0$} \end{aligned}$$

符合上面條件才能藏入數據

## Encoder

假設一個圖片 $I$ ，其中有 $r$ Rows ，$c$ Columns 單個像素點的上限是 $L$

論文中將圖片分為兩部分，$R 與 S$

$R$
