---
layout: post
title:  "Reversible data hiding scheme for color image based on prediction-error expansion and cross-channel correlation 論文筆記"
date:   2023-05-03 00:00:00 +0800
author: "summer"
categories: Data Embedding
header-style: text
tags:
  - Data Embedding
  - 論文筆記
---

## 跨通道參考增加預測準確性

假設有像素 $I$ ，在 current channel 中稱為 $I_c$，在 reference channel 中稱為 $I_r$

他們的鄰居分別是

![ ]({{site.url}}/img/2023-5-3-cross-channel/01.png)

定義 $I_r$ 本身與他所有鄰居的 *distance* 為 $D_m$

$$D_m = \Bigg\lvert \sum_{k=1}^{8} \lambda^k_m I^k_r - I_r \Bigg\rvert $$

$\lambda^k_m = 1/8$ 代表八個鄰居

> $D_m$在平滑的區域會較小

然後，根據 weighting coefficient $\lambda_e$ 預測邊緣 $D_e$

$$D_e = \Bigg\lvert \sum_{k=1}^{8} \lambda^k_e I^k_r - I_r \Bigg\rvert $$

預測邊緣部分可以拆成

$$D_h = \Bigg\lvert \frac{I^w_r+I^e_r}{2}-I_r \Bigg\rvert$$

$$D_v = \Bigg\lvert \frac{I^n_r+I^s_r}{2}-I_r \Bigg\rvert$$

$$D_d = \Bigg\lvert \frac{I^{nw}_r+I^{se}_r}{2}-I_r \Bigg\rvert$$

$$D_{ad} = \Bigg\lvert \frac{I^{ne}_r+I^{sw}_r}{2}-I_r \Bigg\rvert$$

$$D_e = min\{D_h,D_v,D_d,D_{ad}\} $$

假設 $D_e=D_h$ 那與 $\lambda_e = (0,0,0,\frac{1}{2},\frac{1}{2},0,0,0)$ 相同

> $D_e$在平滑的區域也會較小，透過$D_m$ 與 $D_e$ 的差能判斷是否是邊緣

$(D_m-D_e)$是否大於閾值 $\tau$ 判斷是邊緣或是平滑的區域，$\tau$ 的大小決定的藏量的大小

## 資料隱藏的前置作業

根據 reference channel 的邊緣判斷，得出 current channel $I_c$ 的預測值 $\hat{I_c}$

如果 $(D_m-D_e) > \tau $，處於邊緣

$$\hat{I_c} = \Bigg\lvert \sum_{k=1}^{8} \lambda^k_e I^k_c\Bigg\rvert$$

如果 $(D_m-D_e) \leq \tau $

$$ \hat{I_c} = \frac{I^w_c+I^e_c+I^n_c+I^s_c}{4} $$

得到 prediction-error $P$

$$ P=  I_c - \lfloor \hat{I_c} + 0.5 \rfloor $$

基於 PEE data hiding，定義兩個整數 $T_r$ 、 $T_l$ 將 prediction-error histogram 切成三份

$P$ 在不一樣的地方有不一樣的值 $P'$

$$ P'=
    \begin{cases}
         2P+b
         & \text {if $P \in [T_l,T_r)$}
         \\
         P+T_r
         & \text {if $P \geq T_r$}
         \\
         P+T_l
         & \text {if $P < T_l$}
    \end{cases}
$$

$B \in \{0,1\}$，是要隱藏的Bit

將修改過的 $P'$ 加回 $\hat{I_c}$

$$I_c' = \lfloor \hat{I_c} + 0.5 \rfloor +P'$$

取出隱藏 Bit 的時候，P'的 LSB 就是隱藏 Bit

$$b = P' - 2\lfloor P'/2 \rfloor \quad \text {if $P \in  [2T_l,2T_r)$}$$

取出後還原 $P$

$$ P=
    \begin{cases}
         \lfloor P'/2 \rfloor
         & \text {if $P \in [2T_l,2T_r)$}
         \\
         P'-T_r
         & \text {if $P \geq 2T_r$}
         \\
         P'-T_l
         & \text {if $P < 2T_l$}
    \end{cases}
$$

接著還原 $I_c = \lfloor \hat{I_c} + 0.5 \rfloor +P$













