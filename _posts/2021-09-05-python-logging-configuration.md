---
layout: post
title:  "python3 logging 設定"
date:   2021-09-07 08:42:10 +0800
author: "summer"
categories: python3
header-style: text
tags:
  - python3
---

使用 python logging module 時，將設定檔與程式分開，是比較好的方式。

## logging module 組成

logging module 有四個部分，loggers、handlers、filters 和 formatters

* loggers 提供方法給程式使用
* handlers 將紀錄發給指定對象
* filters 提供更細緻的過濾
* formatters 為最後輸出格式化

## logging 配置文件

### 建立配置文件

在文件中 version 是必要的，其他都是可選的。

設定文件 logging_conf.json

``` json
{ 
    "version": 1,
    "disable_existing_loggers": true,
    "formatters": { 
        "standard": { 
            "format": "%(asctime)s [%(levelname)s] %(name)s: %(message)s"
        }
    },
    "handlers": { 
        "default": { 
            "level": "INFO",
            "formatter": "standard",
            "class": "logging.StreamHandler",
            "stream": "ext://sys.stdout"  
        }
    },
    "loggers": { 
        "": {  
            "handlers": ["default"],
            "level": "WARNING",
            "propagate": false
        },
        "my.packg": { 
            "handlers": ["default"],
            "level": "INFO",
            "propagate": false
        },
        "__main__": {  
            "handlers": ["default"],
            "level": "DEBUG",
            "propagate": false
        }
    } 
}
```

* 第 4 行新建了一個formatters，名叫 standard
  * 其中 format 是格式化的描述

* 第 9 行新建了一個 handlers，名叫 default
  * 其中 class 是必要的，值是處理程序類的完整名稱在這裡是 logging.StreamHandler
  * level 為處理程序級別，可選
  * formatter 指定所對應的 formatters 在這裡名為 standard
  * stream 為輸出流，可設定為外部對象

* 第 17 行新建了三個 loggers，分別為 " " (root) 、 my.packg 、 main
  * handlers 指定所對應的 handlers，在此名為 default
  * level 紀錄器級別
  * propagate 決定是否將日誌紀錄向上層傳遞

### 主程式

``` python
import logging
import logging.config
import json

//讀取設定檔
with open("logging_conf.json", "r") as fd:
    logging.config.dictConfig(json.load(fd))

//獲取 logger
logger = logging.getLogger('')

logger.debug('debug message')
logger.info('info message')
logger.warning('warn message')
logger.error('error message')
logger.critical('critical message')
```

輸出

``` python
2021-09-07 08:33:34,694 [WARNING] root: warn message
2021-09-07 08:33:34,695 [ERROR] root: error message      
2021-09-07 08:33:34,695 [CRITICAL] root: critical message
```

我們得到的 logger 為 root logger , level 設定為 WARNING ，所以只出現 WARNING 以上的錯誤

如果改成

``` python
import logging
import logging.config
import json

//讀取設定檔
with open("logging_conf.json", "r") as fd:
    logging.config.dictConfig(json.load(fd))

//獲取 logger
logger = logging.getLogger('my.packg')

logger.debug('debug message')
logger.info('info message')
logger.warning('warn message')
logger.error('error message')
logger.critical('critical message')
```

輸出

``` python
2021-09-07 08:36:55,984 [INFO] my.packg: info message
2021-09-07 08:36:55,985 [WARNING] my.packg: warn message
2021-09-07 08:36:55,985 [ERROR] my.packg: error message
2021-09-07 08:36:55,985 [CRITICAL] my.packg: critical message
```

## 參考資料

* [python之配置日志的几种方式 --- 云游道士](https://www.cnblogs.com/yyds/p/6885182.html)

* [Where is a complete example of logging.config.dictConfig?](https://stackoverflow.com/questions/7507825/where-is-a-complete-example-of-logging-config-dictconfig)

* [python docs](https://docs.python.org/3/howto/logging.html#logging-advanced-tutorial)