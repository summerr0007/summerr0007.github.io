---
layout: post
title:  "John X hashcat 暴力破解壓縮檔密碼"
date:   2021-09-28 1:01:10 +0800
author: "summer"
categories: 資安
header-style: text
tags:
  - John The Ripper
  - Hashcat
  - 資安
---

想破解壓縮檔密碼，步驟主要是使用 John The Ripper 取得 hash，用 hashcat 暴力破解

本次將在 windows 上運行

建立壓縮包

建立 zip , 7z , rar 格式的壓縮檔，密碼皆為 apple

* apple.zip
* apple.7z
* apple.rar

## John The Ripper 取得 hash

根據不同壓縮檔類型，選擇不同工具

```bash
c:\john-1.9.0-jumbo-1-win64\run\zip2john.exe apple.zip > applezip.hash
c:\john-1.9.0-jumbo-1-win64\run\rar2john.exe apple.rar > applerar.hash
c:\john-1.9.0-jumbo-1-win64\run\7z2john.pl apple.7z > apple7z.hash
```

能拿到三個hash，像是

```hash
apple.zip/apple.txt:$pkzip2$1*1*2*0*15*9*e959b46b*0*27*0*15*e959*0984*4e695db434b4c17ca7d3723a5a1fecfa666241d118*$/pkzip2$:apple.txt:apple.zip::apple.zip

apple.rar:$rar5$16$459cff6a7cb72169d7bcf5f12325871a$15$86e7852f5d8e327595543630a2c3ad73$8$ebed9dc37b3700eb

apple.7z:$7z$2$19$0$$16$2b268f9adcc97468750d1244d147fb56$3914970219$16$13$ccc0ed1ac2bdde1da1ccb3ec5c8e20a0$9$00
```

## hashcat 暴力破解

首先

對剛剛拿到的 hash 去頭去尾

```hash
$pkzip2$1*1*2*0*15*9*e959b46b*0*27*0*15*e959*0984*4e695db434b4c17ca7d3723a5a1fecfa666241d118*$/pkzip2$

$rar5$16$459cff6a7cb72169d7bcf5f12325871a$15$86e7852f5d8e327595543630a2c3ad73$8$ebed9dc37b3700eb

$7z$2$19$0$$16$2b268f9adcc97468750d1244d147fb56$3914970219$16$13$ccc0ed1ac2bdde1da1ccb3ec5c8e20a0$9$00
```

然後使用 hashcat 進行爆破

```bash
hashcat -m 17225 -a 3 ..\***\***\***\***\applezip.hash
```

<div class="alert alert-danger"> 必須在 hashcat 目錄裡執行 </div>

-a 是 破解方法 選項 3 是暴力與掩碼破解
-m 是 hash 種類 pkzip2 對應的編號為 17225。

<div class="alert alert-info">  可以在這裡[這裡](https://hashcat.net/wiki/doku.php?id=example_hashes)找到完整列表，或使用 hashcat --help</div>

執行後會在螢幕上看到破解過程，成功後能看到類似結果

```bash
$pkzip2$1*1*2*0*15*9*e959b46b*0*27*0*15*e959*0984*4e695db434b4c17ca7d3723a5a1fecfa666241d118*$/pkzip2$:apple
```

密碼會串在最後，密碼為 "apple"

其他種類的 hash 也大致一樣

```bash
hashcat -m 11600 -a 3 ..\***\***\***\***\apple7z.hash

hashcat -m 13000 -a 3 ..\***\***\***\***\applerar.hash
```
