---
layout: post
title:  "802.1Qau QCN 筆記"
date:   2024-01-27 00:00:00 +0800
author: "summer"
categories: 網路
header-style: text
tags:
  - 網路
---

QCN 是運用在 L2 環境下的壅塞控制

QCN大致分為 3 部分

* Reaction Point
* Congestion Point
* Reflection Point

對應發送方、中間節點、接收方

## Congestion Point

Congestion Point 會在收到封包後計算 $F_b$，$F_b$ 被用來量化壅塞程度

$F_b = (Q_{eq} - q{len}) - W * (q{len} - q{len}_{old})$

$Q_{eq}$ 是 Queue 的參考點，QCN 會將 Queue 長度維持在這裡

W 是控制參數，模擬時取 2

$F_b$ 會被限制在

$ -Q_{eq}*(2*W+1) \le F_b \le 0$

區間內

接下來根據所使用的位元數將 $F_b$ 量化成一個正數稱為 $qntz\_F_b$，
等於 0 時代表沒有壅塞發生。

Congestion Point 會在 **Time_to_mark** byte counter 小於 0 ，且 $qntz\_F_b > 0$ 時送出 feedback frame

***Time_to_mark*** byte counter小於 0 時還會更新 $q{len}_{old}$ 並更新byte counter

fb_frame 中有

* destination address *送方 MAC*
* source address *壅塞點的 MAC*
* flow id
* $qntz\_F_b$
* $q_{off}$ *$Q_{eq} - q{len}$*
* $q_{delta}$ *$q{len} - q{len}_{old}$*

## Reaction Point

在 Reaction Point 第一次收到 feedback 後，會為流啟用一個 rate limiter，
rate limiter 中有

* state *區分是否啟用*
* flow id
* crate *current rate*
* trate *taget rate*
* tx_bcount *byte counter 用於改變 stage*
* si_count *紀錄 byte counter 的 stage*
* timer
* timer_scount *紀錄 timer 的 stage*
* qlen

> 如果 Reaction Point 不是第一次收到

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
