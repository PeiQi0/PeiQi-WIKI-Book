# OneBlog Shiro默认密钥 远程命令执行漏洞

## 漏洞描述

OneBlog 小于v2.2.1 由于使用含有漏洞版本的Apache Shiro和默认的密钥导致存在远程命令执行漏洞

## 漏洞影响

<a-checkbox checked>OneBlog <= v2.2.1</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="OneBlog开源博客后台管理系统"</a-checkbox></br>

## 漏洞复现

登陆页面如下



![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313151701794.png)



使用工具直接利用Apache Shiro漏洞即可



![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313151701894.png)