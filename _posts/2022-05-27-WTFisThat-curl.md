---
layout: post
title:  "那什麼鬼 -- cURL 基礎用法"
date:   2022-05-27 14:12:10 +0800
author: "summer"
categories: 那什麼鬼
header-style: text
tags:
  - 那什麼鬼
  - linux
  - cURL
  - 網路
---

cURL 是一個開源的專案，能基於網路協定對 URL 進行操作。cURL 不但是跨平台的，還有各語言的 API

## 基本操作

cURL 支援許多協定，但這裡只寫 http/https 的運用

### 取得某網站的首頁

```bash
curl https://www.example.com/
```

### 從 8000 port 取得某網站的首頁

```bash
curl http://www.weirdserver.com:8000/
```

### ipv6 網址

```bash
curl "http://[2001:1890:1112:1::20]/"
```

## 下載檔案

### 自訂檔案名稱

-o 可以將取回的檔案以自訂名稱儲存在本機

```bash
curl -o thatpage.html http://www.example.com/
```

### 使用遠端名稱

-O 能自動使用遠端檔案名稱，但是如果沒有指定檔案名稱就會失敗

```bash
curl -O http://www.example.com/index.html
```

## 取得一部份的檔案

-r 可以設定只取得一部份的檔案

### 取得 0-100 bytes

```bash
curl -r 0-99 http://www.get.this/
```

### 取得最後 500 bytes

```bash
curl -r -500 http://www.get.this/
```

## 詳細輸出

-v 能有詳細輸出

如果要輸出詳情到檔案的話，可以用 --trace or --trace-ascii

```bash
curl --trace trace.txt www.haxx.se
```

## http post

-d 後攜帶資料，cURL 就會自動使用 post ，資料應該要被編碼過

```bash
curl -d "name=Rafael%20Sagula&phone=3320780" http://www.where.com/guest.cgi
```
