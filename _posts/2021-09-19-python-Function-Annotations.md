---
layout: post
title:  "python Function Annotations"
date:   2021-09-19 15:42:10 +0800
author: "summer"
categories: python3
header-style: text
tags:
  - python3
---

先來看看這個

```python
def foo(b:10+19,c:'bar',a:int=10)->None:
    return
```

這段程式主要關注點是

``` a:int=10 ```  a 是參數名，而 ':' 後面的是參數註解，而 '=' 是預設值，當然，有註解的參數也可以有預設值

後面的 '->None' 是返回值的註解

註解可以是型別、字串甚至是表示式

那寫了註解後該如何運用

```python
print(foo.__annotations__)
```

輸出

```python
{'b': 29, 'c': 'bar', 'a': <class 'int'>, 'return': None}
```

這樣就能做簡易的參數檢查了
