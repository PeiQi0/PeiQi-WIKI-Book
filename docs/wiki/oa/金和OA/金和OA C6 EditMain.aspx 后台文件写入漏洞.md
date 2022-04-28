# 金和OA C6 EditMain.aspx 后台文件写入漏洞

## 漏洞描述

金和OA C6 EditMain.aspx 存在任意文件写入漏洞，通过漏洞可以写入恶意文件获取服务器权限

## 漏洞影响

<a-checkbox checked>金和OA C6</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="金和网络-金和OA"</a-checkbox></br>

## 漏洞复现

漏洞触发需要后台权限

![img](../../../.vuepress/public/img/1628350407372-c8b8b96e-c7cd-47e3-acee-90bb3d055866.png)

访问漏洞点 `/C6/JHSoft.Web.Portal/EditMain.aspx?id=cmdshell.aspx`

![img](../../../.vuepress/public/img/1628350462105-61aa0f6b-0712-4f8b-87c2-c8a5cbf279e2.png)

写入webshell代码保存

![img](../../../.vuepress/public/img/1628350735733-a56b0cd0-92ff-4e1f-90bb-e602b3fec72d.png)

再访问 `/C6/JHSoft.Web.Portal/Default/cmdshell.aspx` 

![img](../../../.vuepress/public/img/1628350972563-90ebac52-7c40-4b32-ad3a-e1ea2927b071.png)