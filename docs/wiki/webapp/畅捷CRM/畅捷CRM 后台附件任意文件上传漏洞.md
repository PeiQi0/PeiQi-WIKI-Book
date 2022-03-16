# 畅捷CRM 后台附件任意文件上传漏洞

## 漏洞描述

畅捷CRM 后台附件存在任意文件上传漏洞，通过解析漏洞可跳过后缀更改获取网站权限

## 漏洞影响

<a-checkbox checked>畅捷CRM</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="畅捷CRM"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131837394.png)

部分存在空密码 admin/空密码

登录后添加客户，并上传附件为PHP文件，其中文件名为 xxx.xxx.php格式，越过系统中的后缀更改

![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131837317.png)

点击文件名跳转

![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131837357.png)