# 绿盟 BAS日志数据安全性分析系统 accountmanage 未授权访问漏洞

## 漏洞描述

绿盟 BAS日志数据安全性分析系统存在未授权访问漏洞，通过漏洞可以添加任意账户登录平台获取敏感信息

## 漏洞影响

<a-checkbox checked>绿盟 BAS日志数据安全性分析系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="WebApi/encrypt/js-sha1/build/sha1.min.js"</a-checkbox></br>

## 漏洞复现

登录页面



![img](../../../.vuepress/public/img/image-20210718205102941.png)



未授权页面



```plain
/accountmanage/index
```



![img](../../../.vuepress/public/img/image-20210718205112107.png)



添加用户并登录



![img](../../../.vuepress/public/img/image-20210718205120131.png)



使用账户登录后台

![img](../../../.vuepress/public/img/image-20210718205134384.png)