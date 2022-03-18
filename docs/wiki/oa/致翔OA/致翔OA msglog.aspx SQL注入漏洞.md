# 致翔OA msglog.aspx SQL注入漏洞

## 漏洞描述

致翔OA msglog.aspx文件存在SQL注入漏洞，攻击者通过漏洞可获取敏感信息

## 漏洞影响

<a-checkbox checked>致翔OA </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="致翔软件-致翔OA"</a-checkbox></br>

## 漏洞复现

产品页面

![img](../../../.vuepress/public/img/1631324925929-fd15dc5d-cf9b-40d0-bd7d-b663b3f7a5c7.png)

存在漏洞的文件为 `msglog.aspx`,涉及注入的参数为 user

```python
/mainpage/msglog.aspx?user=1
```

![img](../../../.vuepress/public/img/1631325086420-5f224861-97a8-40e2-84fa-f7cad4ee705c.png)