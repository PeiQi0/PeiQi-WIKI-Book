# 吉拉科技 LVS精益价值管理系统 Business 目录遍历漏洞

## 漏洞描述

杭州吉拉科技有限公司多个系统存在目录遍历漏洞，由于 /Business/ 访问控制不严，攻击者可利用该漏洞获取敏感信息。

## 漏洞影响

<a-checkbox checked>吉拉科技 LVS精益价值管理系统 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>"Supperd By 吉拉科技"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1645938012045-f9e4eba1-ff58-497b-8d64-09d215b57332.png)

验证POC

```javascript
/Business/
```

![img](../../../.vuepress/public/img/1645938036770-ffd291fc-bd09-49e6-8b33-7960c90cd97d.png)