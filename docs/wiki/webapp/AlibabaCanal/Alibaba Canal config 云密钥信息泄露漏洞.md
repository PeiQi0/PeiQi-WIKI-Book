# Alibaba Canal config 云密钥信息泄露漏洞

## 漏洞描述

由于/api/v1/canal/config  未进行权限验证可直接访问，导致账户密码、accessKey、secretKey等一系列敏感信息泄露

## 漏洞影响

<a-checkbox checked>Alibaba Canal</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="Canal Admin"</a-checkbox></br>

## 漏洞复现

验证漏洞的Url为

```plain
/api/v1/canal/config/1/0
```

![img](../../../.vuepress/public/img/can-1.png)



其中泄露了 aliyun.access 密钥，可以控制密钥下的所有服务器

默认口令 `admin/123456`

![img](../../../.vuepress/public/img/can-2.png)