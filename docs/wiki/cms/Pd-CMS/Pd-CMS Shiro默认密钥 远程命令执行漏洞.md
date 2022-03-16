# Pd-CMS Shiro默认密钥 远程命令执行漏洞

## 漏洞描述

Pd-CMS存在Shiro默认密钥，攻击者通过已知的密钥将会造成Shiro远程命令执行漏洞

## 漏洞影响

<a-checkbox checked>Pd-CMS </a-checkbox></br>

## 网络测绘

<a-checkbox checked>"pb-cms"</a-checkbox></br>

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1646103727170-443f9637-80a5-41da-9842-f0901708b931.png)

默认密钥

```javascript
3AvVhmFLUs0KTA3Kprsdag==
```

![img](../../../.vuepress/public/img/1646103764938-dd682295-e70a-4f4d-ba7f-58acaf09c447.png)





若有收获，就点个赞吧