---
layout: post
title:  "Arch Linux Bluetooth Keyborad 設定"
date:   2025-04-23 00:00:00 +0800
author: "summer"
categories: 影像
header-style: text
tags:
  - Linux
  - Bluetooth
---

新裝了 Arch Linux，開始一步步設定藍芽。

## 依賴包

藍芽依賴於

+ bluez
+ bluez-utils

## 啟動服務

```bash
sudo systemctl enable --now bluetooth
```

## 使用介面

使用 ```bluetoothctl``` 進入子 shell

```scan on``` 進行掃描可用裝置

理論上使用 ```connect [mac]``` 連線後應該就能使用藍芽設備了，但我遇到了奇怪的問題，鍵盤始終沒反應，瘋狂的斷線並重連

查看 systemctl status bluetoothctl 後

發現以下錯誤

```bash
profiles/input/device.c:hidp_add_connection() Rejected connection from !bonded device /org/bluez/hci0/dev_...
```

經過搜索後發現了解決方法

1. 斷線鍵盤並 ```remove [mac]```
2. ```scan on```
3. ```pair [mac]```
4. ```connect [mac]```
5. ```trust [mac]```

需要依據順序執行

好消息是我的鍵盤能用了，壞消息是我完全不知道為什麼能用

有時藍牙連線太慢了，可以打開 /etc/bluetooth/main.conf 裡的 FastConnectable=true
