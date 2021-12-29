---
layout: post
title:  "Yolov5 安裝與訓練"
date:   2021-09-07 08:42:10 +0800
author: "summer"
categories: Machine Learning
header-style: text
tags:
  - Machine Learning
  - Yolov5
---

<div class='alert alert-info'>
建議用 Anaconda 建立環境
</div>

## yolov5 安裝

> [yolov5 github](https://github.com/ultralytics/yolov5)

yolov5 需要 python >= 3.6 與 pytorch >= 1.7

### pytorch 安裝

安裝 pytorch 前需要安裝 cuda (如果你是N卡的話)

> [pytorch 官網](https://pytorch.org/get-started/locally/)

選擇適合的版本

![pytorch]({{site.url}}/img/2021-12-29-first-yolov5/1.jpg)

我使用 Anaconda 架設環境，將安裝命令打在 conda 開始安裝

### clone yolov5

將 yolov5 從 github clone 下來後

```bash
git clone https://github.com/ultralytics/yolov5
cd yolov5
pip install -r requirements.txt
```

將 yolov5 從 github clone 下來後，安裝 requirements，接下來就可以來開始訓練了

## yolov5 訓練

首先，必須先準備訓練用圖片

### labelImg 標記圖形

[labelImg github](https://github.com/tzutalin/labelImg)

clone 下來後需要自行編譯 , 需要 pyqt5 與 lxml

```bash
pyrcc5 -o libs/resources.py resources.qrc
```

在開始標記前，需要先準備標籤，因為yolo格式是用標籤順序區分被標記物體的

開啟 ```data/predefined_classes.txt``` 清空預設標籤並加上自定義標籤

接下來進入標記環節

```bash
python labelImg.py
```

![labelImg main]({{site.url}}/img/2021-12-29-first-yolov5/2.jpg)

開啟後能看到主介面，開啟資料夾後，圖片會顯示在中間

確定目前處於 yolo 模式後使用 Create RectBox 工具圈出圖形，選擇標籤後存檔，就完成一張圖的標記了

> 標記檔存檔時，名子要和圖片一樣

### 訓練模型

#### yaml

到 yolov5/data 目錄下新建 images 與 labels 資料夾，分別放圖片與生成出來的標記檔。

將 data 目錄下的 coco128.yaml 複製一份，並改成自己需要的名子，內容大概是這樣的

```yaml
# Train/val/test sets as 1) dir: path/to/imgs, 2) file: path/to/imgs.txt, or 3) list: [path/to/imgs1, path/to/imgs2, ..]
path: .  # dataset root dir
train: images # train images (relative to 'path') 128 images
val: images  # val images (relative to 'path') 128 images
test:  # test images (optional)

# Classes
nc: 80  # number of classes
names: ['person', 'bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat', 'traffic light',
        'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow',
        'elephant', 'bear', 'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee',
        'skis', 'snowboard', 'sports ball', 'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard',
        'tennis racket', 'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple',
        'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake', 'chair', 'couch',
        'potted plant', 'bed', 'dining table', 'toilet', 'tv', 'laptop', 'mouse', 'remote', 'keyboard', 'cell phone',
        'microwave', 'oven', 'toaster', 'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear',
        'hair drier', 'toothbrush']  # class names


# Download script/URL (optional)
download: https://ultralytics.com/assets/coco128.zip
```

重要的是 train 與 val 必須指向 images 資料夾，nc 是一共有幾個標籤，names 就是每個標籤的名子，必須照順序

train 與 val 也可以是路徑陣列或文字文件，但文件內還是圖片路徑

#### train.py

完成後來看看 yolo 根目錄下的 train.py，這是主要訓練的程式

拉到最下方有個參數設置的地方，這些參數可以透過命令更改，但如果要執行很多次的話，直接改預設比較方便。

我們需要關注的參數有 weights data epochs batch-size

- weights 是訓練時使用的模組，依需求更換

![model]({{site.url}}/img/2021-12-29-first-yolov5/3.png)

- data 是訓練時使用的資料，指向剛剛的 yaml 檔

- epochs 和 batch-size 會影響訓練出來的結果，如果執行時出現 out-of-memory，需要適當減少 batch-size

執行 train.py，這需要好長一段時間。結果會出現在 run 資料夾內，你能在 weights 資料夾內找到兩個 .pt 檔，這就是你訓練出來的模型了

## 測試模型

yolov5 內有預設的 detect.py 可以測試模型的結果

在 detect.py 最下方參數設置，需要調整的只有 weights 和 source

- weights 使用剛剛訓練出來的模組

- source 是測資的位置，可以是圖片，也可以是影片，輸入 0 可以開啟攝影鏡頭
