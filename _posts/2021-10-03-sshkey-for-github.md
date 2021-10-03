---
layout: post
title:  "為 github 設定 ssh key"
date:   2021-10-3 23:59:10 +0800
author: "summer"
categories: Github
header-style: text
tags:
  - Github
  - Git 
  - ssh
---

github 不能使用 https push 後，我想改用 ssh，設定過程中遇見許多問題，在這裡記錄下來

## 產生ssh key

在 windows 上可以使用 ```ssh-keygen``` 來產生金鑰，過程中會問你是否要加上密碼，留空可以忽略。

在看到 fingerprint 與 randmart 後就能在目錄下找到剛產生的公鑰和私鑰

## 將公鑰加入 github

進入設定頁面，側邊欄找到 SSH and GPG keys，加入 ssh key

## 將金鑰放入 linux

這步驟我使用 netcat 將金鑰傳送至 linux 虛擬機，netcat 部分再寫另一篇文章吧

將金鑰放入 ~/.ssh/ 中，並新增 config 檔，原因是金鑰與預設名稱不同，會抓不到金鑰

```config
Host github.com
    HostName github.com
    User summerr0007
    IdentityFile ~/.ssh/summer_key
```

IdentityFile 為私鑰的路徑

## 連線測試

連線測試看看

```bash
ssh -vT git@github.com
```

我在這裡出現了奇怪錯誤

```bash
sign_and_send_pubkey: signing failed: agent refused operation
```

將私鑰權限改為 600 即可解決，太大太小都不行

再次測試

Hi summerr0007! You've successfully authenticated, but GitHub does not provide shell access.

成功

## 修改 remote

到專案目錄下 找到 .git/config 找到 url 那行，將其改為 url = git@github.com:你的名子/專案名.git

存檔，試著 push 看看吧
