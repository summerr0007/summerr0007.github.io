---
layout: post
title:  "那什麼鬼 -- network Incast 問題"
date:   2021-08-27 16:32:10 +0800
author: "summer"
categories: 那什麼鬼
header-style: text
tags:
  - 那什麼鬼
  - Incast
  - 網路
---
Incast 問題指的是在多對一通訊模式下，眾多 server 所傳送的資料同一時間進入 switch ，造成網路的極度壅塞。

由於 TCP 重送機制，server 未收到 ack 時會重送資料，這會使發生 incast 問題時的網路狀況雪上加霜，這是災難性的。

解決方法有幾種

+ 增加 switch 的 buffer
+ 減少 TCP 的 RTO (Retransmission TimeOut) 能有效提高吞吐量

對於 data center 目前有針對 data center 的 tcp 版本
