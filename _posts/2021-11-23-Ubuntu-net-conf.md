---
layout: post
title:  "ubuntu 網路設定"
date:   2021-11-23 23:12:10 +0800
author: "summer"
categories: ubuntu
header-style: text
tags:
  - ubuntu
  - 網路
---

> 本文環境為 ubuntu 20.04.3

紀錄一下如何設定 ubuntu 的網路

> 本文 X 指網卡的名稱

## ip 指令

```ifconfig``` 被棄用了 QAQ，來熟悉一下新的 ```ip``` 指令

### 設定網卡

* 顯示所有網卡

``` ip link ```

* 啟用網卡

```ip link set X up```

* 停用網卡

```ip link set X down```

### 查詢 ip 地址

```ip addr```

### 查詢路由表

```ip route```

### 設定 ip 地址

```ip addr add 10.102.66.200/24 dev X```

### 設定預設閘道

```ip route add default via 10.102.66.1```

## 為網卡啟用 dhcp

### 發出請求

``` dhclient X ```

### 釋放 dhcp 地址

``` dhclient -r X ```

## DNS 設定

dns 設定檔在 /etc/resolv.conf

```vim /etc/resolv.conf```

把 nameserver 的部分替換或加入新的

## 更改 netplan 設定網路

 路徑為 /etc/netplan，會看到副檔名為 yaml 的設定檔

 打開會像這樣

 ```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      addresses:
        - 10.10.10.2/24
      gateway4: 10.10.10.1
      nameservers:
          search: [mydomain, otherdomain]
          addresses: [10.10.10.1, 1.1.1.1]
 ```

照上面範例填好數值用

```netplan try```

試試看設定，套用後會在 120 秒後還原，避免設定錯誤，被自己的主機拒於門外

確定沒問題後

``` netplan apply ```

套用變更
