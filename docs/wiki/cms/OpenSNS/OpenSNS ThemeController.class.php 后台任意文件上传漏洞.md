# OpenSNS ThemeController.class.php 后台任意文件上传漏洞

## 漏洞描述

OpenSNS ThemeController.class.php文件中存在文件上传载，其中过滤不足导致可以上传至服务器任意文件

## 漏洞影响

<a-checkbox checked>OpenSNS</a-checkbox></br>

## 网络测绘

<a-checkbox checked>icon_hash="1167011145"</a-checkbox></br>

## 漏洞复现

登录页面如下

![img](../../../.vuepress/public/img/1634371874190-3653480e-380a-4cdc-81fc-7d560bc7d0dc-20220313235625660.png)

登录后的上传页面`/admin.php?s=/theme/add.html`

![img](../../../.vuepress/public/img/1634375246360-20a15b56-e288-4148-a3e0-b7882cf24a8f.png)

存在漏洞的文件为 `Application/Admin/Model/ThemeController.class.php`

![img](../../../.vuepress/public/img/1634375007934-e879d659-e3fd-4f35-83ea-055ff18a4142.png)

其中只需要文件后缀为 zip和rar 就会成功上传并解压至当前的 Theme目录中

![img](../../../.vuepress/public/img/1634375315209-5795c6ea-3f6d-433a-9aef-686b03ccd1db.png)