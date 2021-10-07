---
layout: post
title:  "MQTT 簡介與 Mosquitto 操作 "
date:   2021-10-07 09:34:01 +0800
author: "summer"
categories: MQTT
header-style: text
tags:
  - MQTT
---
## MQTT 簡介

mqtt 是一種輕量級的訊息交換協定，使用 **發布/訂閱** 模式。mqtt 定義了 broker 和 client 兩個部分，client 可以發布與接收訊息，而 broker 負責訊息的交換。

mqtt 的訊息定閱基於主題(topic)，

<div class='alert alert-info'>
本執行環境為 Ubuntu 18.04.1
</div>

## Mosquitto 安裝

Mosquitto 有兩個套件分別為 Mosquitto 和 Mosquitto_client ，第一個為 broker 另一個為 client

```bash
apt install mosquitto mosquitto-clients 
```

## Mosquitto broker 啟動

在要做為 broker 的機器上執行

```bash
systemctl start mosquitto
```

如果要設定為開機啟動可以將 mosquitto 服務 enable

```bash
systemctl start mosquitto
```

## Mosquitto 發送和訂閱

mqtt 不管是發送或是訂閱訊息都需與 broker 交流，所以必須保證與 broker 的通信

## topic

topic 是一個 UTF-8 編碼的字串，是多層架構，每一層用 ```/``` 分開，單個與連續的 ```/``` 是允許的，只是語意上怪怪的

### 發送

```bash
mosquitto_pub -h 192.168.67.130 -t test -m text -q 0
```

-h 指向 broker
-t 為topic
-m 為要傳送的訊息
-q 為 QOS 設定，預設為 0
-d 為顯示詳細 debug 資料

#### QOS

<div class='alert alert-info'>
加上 -d 後能清楚的看到不同 QOS 的差異
</div>

QoS 0：至多傳送一次。即「fire and forget」

QoS 1：至少傳送一次。握手2次：PUBLISH packet與PUBACK packet。

QoS 2：恰好傳送一次。握手4次：PUBLISH訊息 、PUBREC包用於確認受到。如果傳送方沒有收到PUBREC包，就用DUP標誌重發message；如果收到PUBREC包，就刪除最初的PUBLISH包，儲存並回覆PUBREL包。接收方收到PUBREL包，就回覆PUBCOMP包並刪除所有相關狀態。

### 訂閱

```bash
mosquitto_sub -h 192.168.67.130 -t test
```

-h 指向 broker
-t 為topic
-d 為顯示詳細 debug 資料

在訂閱方的 topic 可以使用兩個萬用字元 ```#``` 與 ```+```

* ```#``` 如 ```test/#``` 會收到 test 下所有的 topic
* ```+``` 如 ```test/+/abc``` 會收到 test 所有的 topic 中的 abc
