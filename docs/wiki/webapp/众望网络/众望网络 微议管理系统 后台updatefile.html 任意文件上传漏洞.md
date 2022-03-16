# 众望网络 微议管理系统 后台updatefile.html 任意文件上传漏洞

## 漏洞描述

众望网络 微议管理系统 后台updatefile.html页面任意文件上传漏洞，攻击者通过漏洞可以上传恶意文件控制服务器

## 漏洞影响

<a-checkbox checked>众望网络 微议管理系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"微议管理系统"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1644764082049-d71cf4ba-4bdb-44e3-9fd2-222d4615ef87.png)

默认口令 amdin/admin, 服务器更新界面上传PHP文件

![img](../../../.vuepress/public/img/1644764127005-a8fe69aa-41b4-4797-86ec-93b6eaace692.png)

访问页面

```javascript
/Updatefiles/文件名.php
```

![img](../../../.vuepress/public/img/1644764179206-a350d59f-34da-4d25-add6-4ac48028499d.png)