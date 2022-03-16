# 用友 NC bsh.servlet.BshServlet 远程命令执行漏洞

# 用友 NC bsh.servlet.BshServlet 远程命令执行漏洞

## 漏洞描述

用友 NC bsh.servlet.BshServlet 存在远程命令执行漏洞，通过BeanShell 执行远程命令获取服务器权限

## 漏洞影响

<a-checkbox checked>用友 NC</a-checkbox></br>

## 网络测绘

<a-checkbox checked>icon_hash="1085941792"</a-checkbox></br>

## 漏洞复现

访问页面如下



![img](../../../.vuepress/public/img/image-20210531220356962.png)



漏洞Url为



```plain
/servlet/~ic/bsh.servlet.BshServlet
```



![img](../../../.vuepress/public/img/image-20210531220503672.png)