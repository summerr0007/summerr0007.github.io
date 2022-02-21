---
layout: post
title:  "使用 docker 架設 sqli-lab"
date:   2021-02-21 23:59:59 +0800
author: "summer"
categories: Docker
header-style: text
tags:
  - Docker
  - sqli-lab
---

## Sqli-lab

sqli-lab 是一個 sql 注入的練習平台，這次我使用 docker 來架設這個環境

sqli-lab 所需要的環境為 apache php5.3 mysql

尤其是 php5.3，因為 sqli-lab 使用了舊語法，所以對 php 版本有要求

## Docker LAMP

LAMP 是 Linux Apache php phpmyadmin 的縮寫，要在 Docker 上架設一個 LAMP server 需要編寫 docker-compose

### Docker pull

首先要先把會用到的 docker image pull 下來

```bash
docker pull php:5.3-apache
docker pull mysql
docker pull phpmyadmin/phpmyadmin
```

### Dockerfile 編寫

因為 pull 下來的 php 內並沒有含 php.ini，必須自行加入，寫一份 dockerfile 來加入 php.ini

先建立資料夾

```bash
+-- phpini-php5.3-apache
    +-- dockerfile
    +-- php.ini

```

dockerfile 內容

```dockerfile
FROM php:5.3-apache
COPY php.ini /usr/local/lib
EXPOSE 80
```

FROM 是基底，然後將 php.ini 複製進 /usr/local/lib 目錄內，最後宣告對外 port 為 80

接下來就可以利用這個 dockerfile 建立新的 docker image 了

```bash
docker build -t phpini-php5.3-apache .
```

-t 是名子與tag 可以用 ":" 來加上 tag 如 name:tag
. 是指用當前目錄的 dockerfile

### docker-compose

image 準備好了後就可以開始準備 docker-compose 了

``` docker-compose
version: '3.3'

services:
  db:
    image: mysql
    command: --default-authentication-plugin=mysql_native_password
    environment:
      MYSQL_ROOT_PASSWORD: '123456'
    ports:
      - "3306:3306"
  phpapache:
    image: phpini-php5.3-apache
    ports:
      - "8081:80"
    depends_on:
      - db
    volumes:
      - ./sqli-labs:/var/www/html
  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    ports:
      - "8082:80"
    depends_on:
      - db
    environment:
      PMA_HOST: db
      PMA_PORT: 3306
```

docker-compose 有三項服務，各自加上環境變數

接下來透過 ``` docker-compose up ``` 啟動

## sqli-lab 設定

sql-connections 資料夾內有 db-creds.inc 需要設定資料庫 ip 和帳號。
資料庫 ip 可以用 ``` docker insect ``` 來得到 ip 地址

## 問題

在第一次測試 sqli-lab 時，遇到無法注入的問題，這是 php 魔法引號的原因，把 php.ini 中設定

magic_quotes_gpc = Off

magic_quotes_runtime = Off

magic_quotes_sybase = Off

就能解決
