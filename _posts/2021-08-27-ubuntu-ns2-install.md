---
layout: post
title:  "ubuntu ns2 安裝"
date:   2021-08-27 13:12:10 +0800
author: "summer"
categories: ns-2
header-style: text
tags:
  - ns-2
  - network simulator 2
  - ubuntu
  - 網路
---

## 環境

ubuntu 18.04 LTS

ns2 2.35 (released Nov 4 2011)

## 下載

[ns2 官網](https://www.isi.edu/nsnam/ns/ns-build.html) 下載 allinone 版本，解壓縮。

## 開始安裝

首先安裝 gcc 、 make 和 g++

```bash
apt install gcc g++ make
```

安裝 lib 你需要安裝 libxt-dev 與 libx11-dev

```bash
apt install libxt-dev
apt install libx11-dev
```

到解壓縮後的資料夾內執行 install 檔
``` ./install ```

然後我遇到了以下錯誤

```bash
mdart/mdart_adp.cc:108:21: error: reference to ‘hash’ is ambiguous
  nsaddr_t dstAdd_ = hash(reqId);
                     ^~~~
In file included from ./mdart/mdart.h:52:0,
                 from ./mdart/mdart_adp.h:51,
                 from mdart/mdart_adp.cc:47:
./mdart/mdart_function.h:230:17: note: candidates are: nsaddr_t hash(nsaddr_t)
 inline nsaddr_t hash(nsaddr_t id) {
                 ^~~~
In file included from /usr/include/c++/7/bits/basic_string.h:6587:0,
                 from /usr/include/c++/7/string:52,
                 from /usr/include/c++/7/bitset:47,
                 from ./mdart/mdart_function.h:62,
                 from ./mdart/mdart.h:52,
                 from ./mdart/mdart_adp.h:51,
                 from mdart/mdart_adp.cc:47:
/usr/include/c++/7/bits/functional_hash.h:58:12: note:                 template<class _Tp> struct std::hash
     struct hash;
            ^~~~
mdart/mdart_adp.cc: In member function ‘void ADP::sendDaup()’:
mdart/mdart_adp.cc:396:21: error: reference to ‘hash’ is ambiguous
  nsaddr_t dstAdd_ = hash(mdart_->id_);
                     ^~~~
In file included from ./mdart/mdart.h:52:0,
                 from ./mdart/mdart_adp.h:51,
                 from mdart/mdart_adp.cc:47:
./mdart/mdart_function.h:230:17: note: candidates are: nsaddr_t hash(nsaddr_t)
 inline nsaddr_t hash(nsaddr_t id) {
                 ^~~~
In file included from /usr/include/c++/7/bits/basic_string.h:6587:0,
                 from /usr/include/c++/7/string:52,
                 from /usr/include/c++/7/bitset:47,
                 from ./mdart/mdart_function.h:62,
                 from ./mdart/mdart.h:52,
                 from ./mdart/mdart_adp.h:51,
                 from mdart/mdart_adp.cc:47:
/usr/include/c++/7/bits/functional_hash.h:58:12: note:                 template<class _Tp> struct std::hash
     struct hash;
            ^~~~
Makefile:93: recipe for target 'mdart/mdart_adp.o' failed
make: *** [mdart/mdart_adp.o] Error 1
Ns make failed!

```

我想這是 g++ 版本的問題，namespace 衝突了

找到 ./ns-2.35/mdart/mdart_adp.cc

```bash
vim ./ns-2.35/mdart/mdart_adp.cc
```

把第108行

```C++
    nsaddr_t dstAdd_ = hash(reqId);
```

改成

```C++
    nsaddr_t dstAdd_ = ::hash(reqId);
```

還有第396行

```C++
    nsaddr_t dstAdd_ = hash(mdart_->id_);
```

改成

```C++
    nsaddr_t dstAdd_ = ::hash(mdart_->id_);
```

解決

再試一次``` ./install ```

然後又出事了

```bash
linkstate/ls.h:137:25: error: ‘erase’ was not declared in this scope, and no declarations were found by argument-dependent lookup at the point of instantiation [-fpermissive]
  void eraseAll() { erase(baseMap::begin(), baseMap::end()); }
                    ~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
linkstate/ls.h:137:25: note: declarations in dependent base ‘std::map<int, LsIdSeq, std::less<int>, std::allocator<std::pair<const int, LsIdSeq> > >’ are not found by unqualified lookup
linkstate/ls.h:137:25: note: use ‘this->erase’ instead
Makefile:93: recipe for target 'linkstate/ls.o' failed
make: *** [linkstate/ls.o] Error 1
Ns make failed!
```

好吧，打開 ns-2.35/linkstate/ls.h

``` bash
vim ns-2.35/linkstate/ls.h
```

第137行

``` C++
void eraseAll() { erase(baseMap::begin(), baseMap::end()); }
```

改成

``` C++
void eraseAll() { this->erase(baseMap::begin(), baseMap::end()); }
```

再試一次``` ./install ```

發現

```bash
In file included from common/tkAppInit.cc:57:0:
./bitmap/play.xbm:5:74: error: narrowing conversion of ‘252’ from ‘int’ to ‘char’ inside { } [-Wnarrowing]
    0xfc, 0x0f, 0xfc, 0x03, 0xfc, 0x00, 0x3c, 0x00, 0x0c, 0x00, 0x00, 0x00};
                                                                          ^
./bitmap/play.xbm:5:74: error: narrowing conversion of ‘252’ from ‘int’ to ‘char’ inside { } [-Wnarrowing]
./bitmap/play.xbm:5:74: error: narrowing conversion of ‘252’ from ‘int’ to ‘char’ inside { } [-Wnarrowing]
./bitmap/play.xbm:5:74: error: narrowing conversion of ‘252’ from ‘int’ to ‘char’ inside { } [-Wnarrowing]
./bitmap/play.xbm:5:74: error: narrowing conversion of ‘252’ from ‘int’ to ‘char’ inside { } [-Wnarrowing]
./bitmap/play.xbm:5:74: error: narrowing conversion of ‘252’ from ‘int’ to ‘char’ inside { } [-Wnarrowing]
Makefile:93: recipe for target 'common/tkAppInit.o' failed
make: *** [common/tkAppInit.o] Error 1
Ns make failed!

```

...，OK，超過大小的Char

打開 ns-2.35/bitmap/play.xbm

```bash
vim ./ns-2.35/bitmap/play.xbm
```

```C++
static char play_bits[] = {
0x00, 0x00, 0x0c, 0x00, 0x3c, 0x00, 0xfc, 0x00,0xfc, 0x03, 0xfc, 0x0f,0xfc, 0x0f, 0xfc, 0x03, 0xfc, 0x00, 0x3c, 0x00, 0x0c, 0x00, 0x00, 0x00};
```

加上強制轉型

``` C++
static char play_bits[] = {
0x00, 0x00, 0x0c, 0x00, (char)0x3c, 0x00, (char)0xfc, 0x00,(char)0xfc, 0x03, (char)0xfc, 0x0f,(char)0xfc, 0x0f, (char)0xfc, 0x03, (char)0xfc, 0x00, (char)0x3c, 0x00, 0x0c, 0x00, 0x00, 0x00};

```

理論上 0xfc 加上強制轉型就好，但沒關西啦~~

再試一次``` ./install ```

```bash
Ns-allinone package has been installed successfully.
Here are the installation places:
tcl8.5.10:	/home/aaa/Downloads/ns-allinone-2.35/{bin,include,lib}
tk8.5.10:		/home/aaa/Downloads/ns-allinone-2.35/{bin,include,lib}
otcl:		/home/aaa/Downloads/ns-allinone-2.35/otcl-1.14
tclcl:		/home/aaa/Downloads/ns-allinone-2.35/tclcl-1.20
ns:		/home/aaa/Downloads/ns-allinone-2.35/ns-2.35/ns
xgraph:	/home/aaa/Downloads/ns-allinone-2.35/xgraph-12.2
gt-itm:   /home/aaa/Downloads/ns-allinone-2.35/itm, edriver, sgb2alt, sgb2ns, sgb2comns, sgb2hierns

----------------------------------------------------------------------------------

Please put /home/aaa/Downloads/ns-allinone-2.35/bin:/home/aaa/Downloads/ns-allinone-2.35/tcl8.5.10/unix:/home/aaa/Downloads/ns-allinone-2.35/tk8.5.10/unix
into your PATH environment; so that you'll be able to run itm/tclsh/wish/xgraph.

IMPORTANT NOTICES:

(1) You MUST put /home/aaa/Downloads/ns-allinone-2.35/otcl-1.14, /home/aaa/Downloads/ns-allinone-2.35/lib, 
    into your LD_LIBRARY_PATH environment variable.
    If it complains about X libraries, add path to your X libraries 
    into LD_LIBRARY_PATH.
    If you are using csh, you can set it like:
		setenv LD_LIBRARY_PATH <paths>
    If you are using sh, you can set it like:
		export LD_LIBRARY_PATH=<paths>

(2) You MUST put /home/aaa/Downloads/ns-allinone-2.35/tcl8.5.10/library into your TCL_LIBRARY environmental
    variable. Otherwise ns/nam will complain during startup.


After these steps, you can now run the ns validation suite with
cd ns-2.35; ./validate

For trouble shooting, please first read ns problems page 
http://www.isi.edu/nsnam/ns/ns-problems.html. Also search the ns mailing list archive
for related posts.
```

看到這些就算成功了，但還沒結束

打開 .bashrc 加入剛才所顯示的路徑

如

<div class="alert alert-danger"> 不能照文章裡的打，路徑會有問題 </div>

```bash
export PATH=$PATH:/home/aaa/Downloads/ns-allinone-2.35/bin:/home/aaa/Downloads/ns-allinone-2.35/tcl8.5.10/unix:/home/aaa/Downloads/ns-allinone-2.35/tk8.5.10/unix

export LD_LIBRARY_PATH=/home/aaa/Downloads/ns-allinone-2.35/otcl-1.14:/home/aaa/Downloads/ns-allinone-2.35/lib
```

```source ~/.bashrc``` 重整一下

測試 ```ns``` 命令

如果看到 "%" 就大功告成了

## 問題與解決

* 報錯

```bash
fatal error: X11/Xlib.h: No such file or directory
 # include <X11/Xlib.h>
           ^~~~~~~~~~~~
compilation terminated.
Makefile:908: recipe for target 'tk3d.o' failed
make: *** [tk3d.o] Error 1
tk8.5.10 make failed! Exiting ...
```

這是缺少 libx11-dev 解決方式

```bash
apt install libx11-dev
```

---

* 報錯

```bash
can't find X includes
otcl-1.14 configuration failed! Exiting ...
```

這是缺少 libxt-dev 解決方式

```bash
apt install libxt-dev
```

---

* 為甚麼不裝低版本的 gcc 和 g++

也可以，我試過裝 4.8 版本的 gcc 和 g++，但要改Makefile
