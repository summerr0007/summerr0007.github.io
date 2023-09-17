---
layout: post
title:  "A High Capacity Information Hiding Algorithm In Color Image 論文筆記"
date:   2023-05-03 00:00:00 +0800
author: "summer"
categories: Data Embedding
header-style: text
tags:
  - Data Embedding
  - 論文筆記
---

設 R, G, B, 三通道

每一通道 8 Bit 表示成 $(r_7,r_6,r_5,r_4,r_3,r_2,r_1,r_0)$

當第 $x$ bit 為 0 時 ，從第 $x-y (y \geq 1)$ 開始隱藏， 直到第 $z$ bit

如 $ z > x-y$ 此像素不能藏資料

$y$ 值越大 視覺品質越好

$z$ 值與強健性有關，為 0 時 LSB 也會被用於隱藏

取出數據時，只要從 $x-y$ 位取出到 $z$ 位即可

---
設 $I$ 為背景的明度，依據 Weber's law ，眼能識別的物體明度是 $I + \Delta I$， $\Delta I \approx 0.02 \times I$




