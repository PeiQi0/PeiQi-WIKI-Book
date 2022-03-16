# 新点OA ExcelExport 敏感信息泄露漏洞

## 漏洞描述

新点OA 存在敏感信息泄露漏洞，访问特定的Url时可以获取所有用户的登录名信息，攻击者获取后可以进一步利用

## 漏洞影响

<a-checkbox checked>新点OA</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="新点OA"</a-checkbox></br>

## 漏洞复现

构造的Url为, 将会下载人员列表文件

```plain
/ExcelExport/人员列表.xls
```



![img](../../../.vuepress/public/img/xd-1.png)



通过获取的登录名登陆后台(默认密码11111)