# 云时空 社会化商业ERP系统 Shiro框架 远程命令执行漏洞

## 漏洞描述

云时空 社会化商业ERP为 Shiro框架 ，使用了默认的密钥导致了远程命令执行漏洞

## 漏洞影响

<a-checkbox checked>云时空 社会化商业ERP系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="云时空社会化商业ERP"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1630040977210-31a0a314-667a-4cbe-9a9b-dce153582ee0.png)

默认密钥为

```python
kPH+bIxk5D2deZiIxcaaaA==
```

![img](../../../.vuepress/public/img/1637636672230-b71aefa7-2e4c-42b8-84b1-c26316f38322.png)