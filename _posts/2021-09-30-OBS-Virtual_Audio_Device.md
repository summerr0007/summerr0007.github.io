---
layout: post
title:  "OBS 擷取特定程式音效"
date:   2021-10-1 3:01:10 +0800
author: "summer"
categories: 錄影
header-style: text
tags:
  - 錄影
  - OBS
---

在使用 obs 錄影時，我希望只錄製會議程式所輸出的音效，google 後發現了可以使用虛擬音效卡進行隔離，我選用 vb-audio 來做為虛擬音效卡

## vb-audio 安裝

* [vb-audio 官網](https://vb-audio.com/Cable/index.htm)

到官網下載成功後解壓縮安裝即可。

完成後會多出一張名為 VB-Audio Virtual Cable 的音效卡

## 虛擬音效卡設定

首先右鍵喇叭，選擇 **音效**

[]({{site.url}}/2021-09-30-OBS-Virtual_Audio_Device/01.jpg)

切換至 **輸出** 並在 Cable Output 上右鍵選擇 **內容**

[]({{site.url}}/2021-09-30-OBS-Virtual_Audio_Device/02.jpg)

切換至 **接聽** 並勾選聆聽此裝置

[]({{site.url}}/2021-09-30-OBS-Virtual_Audio_Device/03.jpg)

這樣輸出至 Virtual Cable 的音源也能被聽到了

## OBS 設定

打開設定，切換至 **音效** 將**全域音訊裝置**的**桌面音效**設定為 **CABLE Input**

[]({{site.url}}/2021-09-30-OBS-Virtual_Audio_Device/04.jpg)

## 程式設定

右鍵喇叭，選擇 **開啟音效設定**

[]({{site.url}}/2021-09-30-OBS-Virtual_Audio_Device/01.jpg)

開啟最下面的 **應用程式音量和裝置喜好設定**

[]({{site.url}}/2021-09-30-OBS-Virtual_Audio_Device/05.jpg)

將想要單獨錄製的程式輸出改為 **CABLE Input**

[]({{site.url}}/2021-09-30-OBS-Virtual_Audio_Device/06.jpg)

在這裡我將會議程式單獨改成 CABLE Input，這樣下次錄影時就只會收到會議程式的聲音了
