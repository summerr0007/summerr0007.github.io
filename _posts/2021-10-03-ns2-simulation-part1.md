---
layout: post
title:  "ns2 第一次模擬"
date:   2021-10-04 11:12:10 +0800
author: "summer"
categories: ns-2
header-style: text
tags:
  - ns-2
  - network simulator 2
  - 網路
---

ns2 的模擬檔案副檔名為 .tcl

首先新增檔案，這裡取名為 vegas.tcl

## 基礎設定

首先新增一個模擬物件

```tcl
#create a simulator object
set ns [new Simulator]
```

然後為模擬結果產生一個輸出檔，並將結果導向檔案

```tcl
#open a output file 
set nf [open out.nam w]
$ns namtrace-all $nf
```

以 w 方式開啟 out.nam 並附給 nf 變數
並將模擬物件 ns 產生的資料寫入 nf

加入一個 procedure finish 在結束時關閉輸出檔

```tcl
proc finish {} {
	global ns nf
	$ns flush-trace
	close $nf
	exit 0
}
```

## 加入節點

新增四個變數並宣告成節點

```tcl
set s1 [$ns node]

set g1 [$ns node]

set g2 [$ns node]

set r1 [$ns node]
```

## 連接節點

四個節點用三條線串起來

宣告三條 link

```tcl
#create a duplex link connent s1 and g1 with bandwidth $accBw ,a delay $accDelay and a DropTail queue 
$ns duplex-link $s1 $g1 $accBw $accDelay DropTail

$ns duplex-link $g2 $r1 $accBw $accDelay DropTail 

$ns duplex-link $g1 $g2 $conBw $conDelay DropTail
```

設定 link 的時候用到了變數，需要在上方宣告變數

```tcl
set accBw 2Mb

set accDelay 10ms

set conBw 1Mb

set conDelay 10ms

set qLenLimit 100

set pktSize 1000bytes

set advWndUpbnd 100
```

很神奇，變數是帶單位的

## 設定 queue limit

```tcl
#set queue limit

$ns queue-limit $g1 $g2 $qLenLimit

$ns queue-limit $g2 $g1 $qLenLimit
```

## 宣告 Agent

宣告兩個 Agent ，vegas1 和 sink1

```tcl
#create a tcp vegas agent  
#set packetsize and window
#attach to s1

set vegas1 [new Agent/TCP/Vegas]
$vegas1 set packetSize_ $pktSize
$vegas1 set window_ $advWndUpbnd
$ns attach-agent $s1 $vegas1

#create a TCPSink attach to $r1

set sink1 [new Agent/TCPSink]
$ns attach-agent $r1 $sink1
```

## 宣告 Application

```tcl
#create a Application 

set ftp1 [new Application/FTP]
$ftp1 attach-agent $vegas1
```

## 連結事件

ns2 資料是由 Agent 發出與接收的

```tcl
$ns connect $vegas1 $sink1
```

## 設定開始與結束時間

```tcl
$ns at 0.5 "$ftp1 start"
$ns at 4.5 "$ftp1 stop"

$ns at 5.0 "finish"
$ns run
```

## 參考資料

* [The ns Manual](https://www.isi.edu/nsnam/ns/doc/index.html)
* [IV. The first Tcl script](https://www.isi.edu/nsnam/ns/tutorial/)