# NetMizer 日志管理系统 main.html 登录绕过漏洞

## 漏洞描述

NetMizer 日志管理系统存在登录绕过漏洞，通过限制某个请求包的发送获取后台权限

## 漏洞影响

<a-checkbox checked>NetMizer 日志管理系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="NetMizer 日志管理系统"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1628834857867-6694d560-2345-49e8-9460-2296c316a7a3-20220314133333345.png)

访问页面 main.html 并抓取请求包, 使用Burp Drop掉下面对请求包

![img](../../../.vuepress/public/img/1628835167182-9b571711-33b5-48d0-8162-d8837141b1fb.png)

Drop后停止抓包，成功进入后台

![img](../../../.vuepress/public/img/1628835279260-2feffcab-d72c-4595-a5dd-5221bb9c064e.png)



