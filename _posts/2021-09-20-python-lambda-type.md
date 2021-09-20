---
layout: post
title:  "神奇寫法 --python3 lambda + type"
date:   2021-09-20 23:50:10 +0800
author: "summer"
categories: 神奇寫法
header-style: text
tags:
  - python3
  - 神奇寫法
---

'神奇寫法' 系列，紀錄我在看別人所寫的程式時所遇到的一些有趣的程式風格

先來看程式

這段程式出處為 [https://github.com/hgjazhgj/FGO-py](https://github.com/hgjazhgj/FGO-py)

```python
IMG = (lambda t: ([setattr(t, i[:-4].upper(), cv2.imread(f'fgoImage/{i}'))for i in os.listdir('fgoImage')if i[-4:] == '.png'], t)[-1])(type('IMG', (),{}))
```

這段程式是將圖片讀入一個名為 "IMG" type 也是 "IMG" 的 物件中

???

怎麼做到的??

我們先來簡化一下

```python
IMG = (lambda t: ([setattr(t, f'i{i}', i)for i in range(2)], t)[-1])(type('IMG', (),{}))
```

把圖片部分拿掉，然後來分析一下

首先把程式分三段，最左邊是 ``` IMG = ```，中間是``` (lambda t: ([setattr(t, f'i{i}', i)for i in range(2)], t)[-1]) ```，最右邊是``` (type('IMG', (),{})) ```

先來看中間和右邊，中間是一個lambda函式而右邊是使用這個函式的參數，這其實是把兩個行為併在一起。宣告一個函式並使用。

那中間的函式呢，我們看到他有一個參數 t 還有 setattr 這個函式能知道中間函式的任務就是把 t 物件加上屬性。

這裡巧妙利用列表生成式來重複執行，那為什麼後面會有 ``` , t)[-1]) ``` 這部份呢，主要是為了回傳物件。我們知道 setattr 的 return 是 None ，如果沒有在後面加上 t 物件，那我們就會回傳 None ，而我們只需要最後的物件，所以用 [-1] 取最後。

搞定中間，來看看右邊，右邊參數應該是個物件，``` (type('IMG', (),{})) ```是什麼?

type() 有一個較少用的方法，有三個參數，他能回傳一個新的 class，關於這個我晚點再寫一篇文章。總之，右邊部分提供了一個新的物件當參數，class 名為 IMG。

那左邊就很好理解了，將返回的物件付給 IMG ，我們就成功拿到一個 IMG 物件了

---

python 的寫法自由度很高，但是真的很難懂，我想這也是樂趣所在吧。
