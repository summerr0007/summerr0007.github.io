---
layout: post
title:  "Clos network"
date:   2024-02-10 00:00:00 +0800
author: "summer"
categories: 那什麼鬼
header-style: text
tags:
  - 那什麼鬼
  - 網路
---


## Clos network

Clos network 是一個 multistage switch network，

<!-- 現在常用在 Data Center 內，clos network 創造了高同質性且相對公平的環境 -->

clos network 的優勢是可以將多個輸入與輸出透過小型的 switch ( 像只有 8 port ) 連接在一起

``` mermaid
graph TD
    A[Core Switch 1] --> B[Aggregation Switch 1]
    A --> C[Aggregation Switch 2]
    B --> D[Edge Switch 1]
    B --> E[Edge Switch 2]
    C --> F[Edge Switch 3]
    C --> G[Edge Switch 4]
    D --> H[Host 1]
    D --> I[Host 2]
    E --> J[Host 3]
    E --> K[Host 4]
    F --> L[Host 5]
    F --> M[Host 6]
    G --> N[Host 7]
    G --> O[Host 8]

```

<a title="Wikiuser6782, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Strict-sense-nonblocking-clos-network.svg"><img width="256" alt="Strict-sense-nonblocking-clos-network" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Strict-sense-nonblocking-clos-network.svg/256px-Strict-sense-nonblocking-clos-network.svg.png"></a>

## fat tree

通常情况下，汇聚交换机是 L2 和 L3 网络的分界点，汇聚交换机以下的是 L2 网络，以上是 L3 网络。每组汇聚交换机管理一个 POD（Point Of Delivery），每个 POD 内都是独立的 VLAN 网络。服务器在 POD 内移动不必修改 IP 地址和默认网关，因为一个 POD 对应一个 L2 广播域。

## Spine-Leaf
