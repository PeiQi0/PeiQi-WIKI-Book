# JCG JHR-N835R 后台命令执行漏洞

## 漏洞描述

JCG JHR-N835R 后台存在命令执行，通过 ; 分割 ping 命令导致任意命令执行

## 漏洞影响

<a-checkbox checked>JCG JHR-N835R</a-checkbox></br>

## Shodan

<a-checkbox checked>JHR-N835R</a-checkbox></br>

## 漏洞复现

登录页面 admin admin登录

在后台系统工具那使用 PING工具，使用 ; 命令执行绕过

![image-20220314111638290](../../../.vuepress/public/img/image-20220314111638290.png)

![image-20220314134239199](../../../.vuepress/public/img/image-20220314134239199.png)
