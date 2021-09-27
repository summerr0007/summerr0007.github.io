---
layout: post
title:  "那什麼鬼 -- tar 常用指令"
date:   2021-09-27 09:41:10 +0800
author: "summer"
categories: 那什麼鬼
header-style: text
tags:
  - 那什麼鬼
  - tar
  - Linux
---
tar 是 Linux 上常用的打包工具

## 常見格式

* .tar
* .tar.gz
* .tar.bz2
* tar.xz

tar 是未經壓縮的檔案，而經壓縮的檔案會將壓縮方式置於附檔名，如 tar.gz 是經過 tar 打包並經過 gzip 壓縮

因為DOS命名規定，會使用以下縮寫

* .tgz 等價於 .tar.gz
* .tbz 與 tb2 等價於 .tar.bz2
* .txz 等價於 .tar.xz

## tar 參數

* -c 建立新 tar 打包檔案
* -x 解開 tar 打包檔案
* -t 列出壓縮檔內文件

* -j 使用 bzip2 壓縮或解壓縮
* -J 使用 XZ 壓縮或解壓縮
* -z 使用 gzip 壓縮或解壓縮

* -v 列出處理的檔案名稱，兩個 v 會列出權限、所有者、大小、時間、檔名等資訊
* -f 指定要處理的檔名
* -p 保留原始權限與屬性
* -C 指定解壓縮目錄

## 範例

壓縮

```bash
tar -zcv -f filename.tar.gz FILENAME
```

FILENAME 為要壓縮的檔案或資料夾

壓縮時最好根據所使用的壓縮方式決定副檔名，如使用 -J 那就將副檔名取為 .tar.xz

解壓縮

```bash
tar -zxv -f filename.tar.gz
```

解壓縮時不指定壓縮方式也沒問題
