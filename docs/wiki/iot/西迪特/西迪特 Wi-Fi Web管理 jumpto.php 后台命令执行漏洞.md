# 西迪特 Wi-Fi Web管理 jumpto.php 后台命令执行漏洞

## 漏洞描述

西迪特  Wi-Fi Web管理系统后台过滤不足导致远程命令执行漏洞

## 漏洞影响

<a-checkbox checked>西迪特  Wi-Fi Web管理</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title=="Wi-Fi Web管理"</a-checkbox></br>

## 漏洞复现o

登录页面

![img](../../../.vuepress/public/img/1629371298672-1ceeafe8-ba9c-42c5-b873-3dfabdd0305a-20220314124737632.png)

通过越权漏洞获取权限，添加Cookie

```bash
Cookie: timestamp=0; cooLogin=1; cooUser=admin
```

进入后台后，诊断功能点存在命令拼接执行漏洞

![img](../../../.vuepress/public/img/1629371484536-e600bfcf-053f-420b-b31c-8d3dc6c9843e.png)