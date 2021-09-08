---
layout: post
title:  "這什麼鬼 -- python3 zip 函數"
date:   2021-09-02 16:52:10 +0800
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
zip(*iterables)
```

Returns an iterator of tuples

## 說明

zip 函數可以把數個可迭代的對象打包成數個 tuple 的迭代，長度由最短的對象所決定，剩下的會被拋棄。

可以用 * 符號反運算。

## 範例

```python
>>> a = [1,2,3]
>>> b = [9,8,7,6]
>>> zipped = zip(a,b)
>>> zipped
<zip object at 0x000001E95A8DB0C0>
>>> zz = list(zipped)
>>> zz
[(1, 9), (2, 8), (3, 7)]
>>> c ,v = zip(*zz)
>>> c
(1, 2, 3)
>>> v
(9, 8, 7)
```

## 小運用

### 行列互換

```python
>>> a = [(1,2,3),(4,5,6),(7,8,9)]
>>> list(zip(*a))
[(1, 4, 7), (2, 5, 8), (3, 6, 9)]
```
