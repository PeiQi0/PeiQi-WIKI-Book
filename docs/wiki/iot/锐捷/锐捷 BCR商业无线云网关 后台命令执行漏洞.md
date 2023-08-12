# 锐捷 BCR商业无线云网关 后台命令执行漏洞

## 漏洞描述

锐捷 BCR商业无线云网关 存在后台命令执行漏洞，攻击者通过默认口令可以登陆后台构造特殊的参数执行任意命令，获取服务器权限

## 漏洞影响

<a-checkbox checked>锐捷 BCR商业无线云网关</a-checkbox></br>

## 网络测绘

<a-checkbox checked>fid="N3IFMflkcmNQ2s4vuAhjzg=="</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1678886885513-6b2afaa6-4198-4fc0-9c3d-e7084dcb387a.png)

通过弱口令登陆后台 admin 拼接命令

![img](../../../.vuepress/public/img/1678886936807-eb374d96-c8ca-45d8-a857-2594cfc5c026.png)