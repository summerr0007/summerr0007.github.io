---
layout: post
title:  "C Inline assembler"
date:   2021-10-17 09:34:01 +0800
author: "summer"
categories: C
header-style: text
tags:
  - C
  - assembler
---

前幾天上課時，為了作業而接觸了 C 的 InLine Assambler，在這裡紀錄一下這幾天看到的東西

<div class='alert alert-info'>
本執行環境為 Ubuntu 20.04.1

編譯使用 GCC 9.3.0
</div>

## GNU Inline assembler 語法

<div class='alert alert-info'>
GNU 的 assembler 是 AT&T 語法
</div>

先來看簡單的

```c
asm(
  "nop \n\t"
  "nop \n\t"
  "nop"
)
```

每一行都用 "" 包起來，結束時需要加上 "\n\t"

inline assamble 中要使用 c 的變數時需要使用 Extended Asm

```c
asm asm-qualifiers (
  code 
  : output operand list 
  : input operand list 
  : clobber list);
```

來看看範例

```c
int a=10, b;
asm ( 
  "movl %1, %%eax \n\t"
  "movl %%eax, %0 \n\t"
  :"=r"(b)           /* output */
  :"r"(a)              /* input */
  :"%eax"         /* clobbered register */
);
```

* asm-qualifiers 在這裡留空，不使用

* %0 , %1 是代表 output 和 input 中兩個操作數，由上而下編號，最多可以指定十個操作數

* input 和 output 中的 "r" 與 "=r" 是 constraint，等等會介紹。在這裡 "r" 是讓 gcc 自動找 register 儲存變數， "=" 是宣告為輸出並為"write only"

* clobbered register 是告訴 gcc 什麼 register 會被改變

* register 在使用時會再加上一個 % ，所以會變成 %%eax

* output , input , clobbered register 都是可選的，如果沒有，留空即可

## asm-qualifiers

* volatile 是讓 GCC 不要對這段程式進行優化，保證這段程式不會被移動或刪除

* inline 會讓這段程式大小最小化符合 inline 的目的

* goto 會通知 compiler 可能會跳轉到 GotoLabels 內的 labels，如果加了這個 Qualifier 那語法會多加一個參數，像是

```c
asm goto ( AssemblerTemplate 
          : OutputOperands
          : InputOperands
          : Clobbers
          : GotoLabels)
```

goto部分請參考[官方手冊 Goto Labels](https://gcc.gnu.org/onlinedocs/gcc/Extended-Asm.html#GotoLabels)

## Symbolic name

%0,%1 這種編號方法可讀性太差了，所以出現了 Symbolic name 的方式，變數名是可以隨便取的，但要注意同一個 asm() 裡名稱不能一樣

語法很容易，直接看範例

```c
int a=10, b;
asm ( 
  "movl %[a], %%eax \n\t"
  "movl %%eax, %[b] \n\t"
  :[b]"=r"(b)           /* output */
  :[a]"r"(a)              /* input */
  :"%eax"         /* clobbered register */
);
```

## constraint

constraint 能指明操作數是否在 register 中與存在哪一個 register 中 ; 也能指明操作數是否是内存引用，如何尋址

在這裡只列出常見用法，更多可以查看 [官方手冊](https://gcc.gnu.org/onlinedocs/gcc-4.8.5/gcc/Simple-Constraints.html#Simple-Constraints)

### register operand constraint

當 constraint 為 r 時，gcc 會將操作數存在一個由gcc所選的 register 中，也可以自己選擇要放在哪個 register 裡

r |Register(s)
-|-
a |%eax, %ax, %al
b |%ebx, %bx, %bl
c |%ecx, %cx, %cl
d |%edx, %dx, %adl
S |%esi, %si
D |%edi, %di

### Memory operand constraint

當 constraint 為 m 時，操作數存放在 Memory ，對操作數的操作都會直接在 Memory 中運行

### Matching(Digit) constraints

輸出與輸入為同一個變數時，會用到 constraint 匹配

```c
asm ("incl %0" :"=a"(var) : "0"(var) );
```

這裡的 constraints 0 是指定使用和第一個輸出相同的 register

### 其他

* i operand 是一個整數常數，該常數包含下面的情形(symbolic name)：`#define MAX_LINE (32)`
* n operand 是一個整數常數，如果系統不支援常數小於一個 word 時，用 n 比 i 好
* E operand 是一個浮點數常數，但是編譯環境與執行環境的 Floating-Point format 必須一致
* F operand 是一個浮點數常數
* g operand 存在暫存器(r)或是記憶體內(m)，或是這是一個整數常數

## Constraint Modifiers

在這裡只列出常見用法，更多可以查看 [官方手冊](https://gcc.gnu.org/onlinedocs/gcc-4.8.5/gcc/Modifiers.html#Modifiers)

* = 表示這是一個 write only的 operand，必須為contraint開始字元。
* \+ 表示這個 operand 在指令中是可讀且可寫的，必須為contraint開始字元。
* & 該operand 為 earlyclobber。表示該 operand 在執行 instruction 讀取之前就會先被寫入

### earlyclobber

看看範例

```c
int input0 = 10;
    int input1 = 15;
    int output0 = 0;
    int output1 = 1;

    asm volatile("mov %[input0], %[output0]\t\n"
                 "mov %[input1], %[output1]\t\n"
                 : [output0] "=r" (output0), [output1] "=r" (output1)
                 : [input0] "r" (input0), [input1] "r" (input1)
                 :);

    printf("output0: %d\n", output0);
    printf("output1: %d\n", output1);
```

output0: 10
output1: 10

Expected output is:

output0: 10
output1: 15

因為 GCC 認為只有在最後才會去對 output operand 作寫入，加上 earlyclobber 符號能告訴 GCC 這在 asm 程式結束前就會先被寫入

所以正確程式應該為

```c
asm volatile("mov %[input0], %[output0]\t\n"
              "mov %[input1], %[output1]\t\n"
              : [output0] "=&r" (output0), [output1] "=r" (output1)
              : [input0] "r" (input0), [input1] "r" (input1)
              :);
```

## 參考資料

* [https://www.jianshu.com/p/1782e14a0766](https://www.jianshu.com/p/1782e14a0766) 下面的中文翻譯

* [GCC-Inline-Assembly-HOWTO](https://www.ibiblio.org/gferg/ldp/GCC-Inline-Assembly-HOWTO.html) 上面的原文

* [ARM GCC Inline Assembler Cookbook](http://www.ethernut.de/en/documents/arm-inline-asm.html)

* [6.47.2 Extended Asm - Assembler Instructions with C Expression Operands](https://gcc.gnu.org/onlinedocs/gcc/Extended-Asm.html) 官方手冊

* [about-inline-asm](http://wen00072.github.io/blog/2015/12/10/about-inline-asm/)

* [What is the correct use of multiple input and output operands in extended GCC asm?](https://stackoverflow.com/questions/36002592/what-is-the-correct-use-of-multiple-input-and-output-operands-in-extended-gcc-as/36002878#36002878)
