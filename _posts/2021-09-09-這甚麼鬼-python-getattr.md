---
layout: post
title:  "這什麼鬼 -- python3 getattr"
date:   2021-09-09 15:20:10 +0800
author: "summer"
categories: 這什麼鬼
header-style: text
tags:
  - python3
  - 這什麼鬼
---

**這什麼鬼** 系列紀錄一些寫程式途中所遇到的問題，一些我不熟的語法和陌生的函數會被記錄在這，避免忘記

## 語法

```python
getattr(object, name[, default])
```

object -- 物件

name -- string 查詢對象的屬性

default -- 默認返回值，在找不到對應屬性時返回；如果沒有提供，在找不到對應屬性時將產生 AttributeError

return 物件對象屬性或方法

## 說明

這個函數能透過名子獲得物件屬性或方法，獲取到的方法可以直接使用。

## 範例

```python
class Q:
    a1 =0
    a2 =1
    a3 =2

    def show(self):
        print(self.a1,self.a2,self.a3)
q = Q()
print(getattr(q,'a2'))
getattr(q,'show')()

for i in range(3):
    print(getattr(q,f'a{i}',"not found"))
```

輸出

```python
1
0 1 2
not found
0
1
```