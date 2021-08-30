---
layout: post
title:  "python PyQt6 新建視窗"
date:   2021-08-30 12:52:10 +0800
author: "summer"
categories: python
header-style: text
tags:
  - python
  - PyQt6
---

試著用 python 做個有 GUI 的小程式，先來試試建個新視窗。

## 準備

* [Qt-designer](https://build-system.fman.io/qt-designer-download)

* PyQt6

``` cmd
pip install PyQt6 
```

## Qt-designer 畫介面

新建檔案 選擇 MainWindow

![選擇 MainWindow]({{site.url}}/img/2021-8-30-pyqt/01.jpg)

畫出介面

![簡單的介面]({{site.url}}/img/2021-8-30-pyqt/02.jpg)

使用 Qt-designer 畫出介面後，將檔案副檔名存為 .ui 在這裡我命名為 newWindow.ui，接下來就要與程式做連結。

## python pyqt6 顯示畫面

新建一個 python 檔案，並準備剛剛畫好的 .ui 檔，

``` python
from PyQt6.QtWidgets import QApplication, QWidget,QMainWindow
from PyQt6 import uic
import sys

class MyMainWindow(QMainWindow):
    def __init__(self, parent=None):
        super().__init__(parent)
        uic.loadUi("newWindow.ui",self)

if __name__ == "__main__":
    app = QApplication(sys.argv)
    myWin=MyMainWindow()
    myWin.show()
    sys.exit(app.exec())        

```

執行

![成功]({{site.url}}/img/2021-8-30-pyqt/03.jpg)

成功

### 另一種方法

將 .ui 檔案變成 python 檔

cmd 執行

```cmd
pyuic6 -x newWindow.ui -o newWindow.py
```

完成後開啟新python檔

``` python
from PyQt6.QtWidgets import QApplication, QWidget,QMainWindow
from PyQt6 import uic
import sys
from newWindow import Ui_MainWindow

class MyMainWindow(QMainWindow):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.ui= Ui_MainWindow()
        self.ui.setupUi(self)
        
if __name__ == "__main__":
    app = QApplication(sys.argv)
    myWin=MyMainWindow()
    myWin.show()
    sys.exit(app.exec())
```

一樣能成功
