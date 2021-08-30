---
layout: post
title:  "jekyll start-up"
date:   2021-08-22 19:32:10 +0800
author: "summer"
categories: jekyll
header-style: text
tags:
  - jekyll
  - 架站
---

<!-- # jekyll start-up -->


<div class="alert alert-info">必要 <strong>ruby</strong> </div>

> jekyll 是 ruby 寫的工具，需要安裝 ruby

## 安裝jelyll

使用 gem 安裝jekyll

``` 
gem install jekyll
```

在當前目錄建立站點

```
jekyll new .
```

由於我的站點是用 github pages 建立，需要修改 Gemfile 加上對 github pages 的支援。

找到
```
# gem "github-pages"
```

拿掉註解並修改成

``` 
gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
```

<div class="alert alert-info">
GITHUB-PAGES-VERSION 需要改成 github-pages gem 的最新支援版本，你可以在 <a src="https://pages.github.com/versions/" > github page Dependency versions</a> 找到它。
</div>

並添加

```
gem "webrick"
```

jekyll 要在本地跑需要這個套件

跑 ```Bundle install```

> 這裡出了問題，把 Gemfile.lock 刪除並跑 ```Bundle update``` 有效
>
>-- 我

恭喜，你有最基礎的網站了，可以 push 上去試試，但推薦先在本機跑跑看。

---

## 在本機跑 jekyll 站點

```bundle exec jekyll serve```

站點會跑在 4000 port

---
## 參考資料
[github 官方手冊](https://docs.github.com/cn/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)