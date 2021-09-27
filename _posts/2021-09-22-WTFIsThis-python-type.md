---
layout: post
title:  "這什麼鬼 -- python3 type function"
date:   2021-09-22 09:05:10 +0800
author: "summer"
categories: 這什麼鬼
header-style: text
tags:
  - python3
  - 這什麼鬼
---

## 語法

```python
type(object)
type(name, bases, dict)
```

* object - 物件
* name - class 的名稱 (string)
* bases - 繼承自何種類 (tuple)
* dict - class 裡的屬性 (dict)

return 回傳物件型別，或回傳一個新的物件類型

## 說明

第一種用法十分常見，我們主要提第二種。

type(name, bases, dict)，會回傳一個新的類型，來看看範例

## 範例

```python
f=(type('Foo', (object,), {'bar':'BAR'}))
print(type(f))
print(f)
print(vars(f))
```

輸出

```python
<class 'type'>
<class '__main__.Foo'>
{'bar': 'ae', '__module__': '__main__', '__dict__': <attribute '__dict__' of 'Foo' objects>, '__weakref__': <attribute '__weakref__' of 'Foo' objects>, '__doc__': None}
```
