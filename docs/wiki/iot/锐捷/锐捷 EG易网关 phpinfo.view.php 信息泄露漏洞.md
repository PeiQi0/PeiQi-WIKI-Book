# 锐捷 EG易网关 phpinfo.view.php 信息泄露漏洞

## 漏洞描述

锐捷EG易网关 部分版本 phpinfo.view.php文件权限设定存在问题，导致未经身份验证获取敏感信息

## 漏洞影响

<a-checkbox checked>锐捷EG易网关</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="Ruijie-EG易网关"</a-checkbox></br>

## 漏洞复现

查看源码发现phpinfo文件



![img](../../../.vuepress/public/img/ruijie-31.png)



访问 url



```plain
/tool/view/phpinfo.view.php
```



![img](../../../.vuepress/public/img/ruijie-32.png)



